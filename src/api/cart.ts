import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddItemDocument,
	type CartFragment,
	CartChangeItemQuantityDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
		//secure: true,
	});

	return cart.createOrder;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			cache: "no-store",
			next: {
				tags: ["cart"],
			},
		});
		if (cart) {
			return cart;
		}
	}
}

export async function createCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {},
		cache: "no-store",
	});
}

export async function addProductToCart(orderId: string, productId: string) {
	const existingCart = await getCartFromCookies();
	const productInCart = existingCart?.orderItems.find((item) => item?.product?.id === productId);

	if (!productInCart) {
		const { product } = await executeGraphql({
			query: ProductGetByIdDocument,
			variables: {
				id: productId,
			},
			cache: "no-store",
		});
		if (!product) {
			throw new Error("Product not found");
		}

		const productQuantity = existingCart?.orderItems?.reduce((acc, item) => {
			if (item.product?.id === product.id) {
				return acc + item.quantity;
			}

			return acc;
		}, 0);

		await executeGraphql({
			query: CartAddItemDocument,
			variables: {
				orderId,
				productId,
				total: product?.price,
				currentQuantity: productQuantity! + 1,
			},
			cache: "no-store",
		});
	} else {
		await executeGraphql({
			query: CartChangeItemQuantityDocument,
			variables: {
				itemId: productInCart.id,
				quantity: productInCart.quantity + 1,
			},
			next: {
				tags: ["cart"],
			},
		});
	}
}
