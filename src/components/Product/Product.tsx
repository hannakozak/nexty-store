import { revalidateTag } from "next/cache";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { AddToCartButton } from "@/components/Product/AddToCartButton";
import { ProductDescription } from "@/components/Product/ProductDescriprion";
import { ProductCoverImage } from "@/components/productsList/ProductCoverImage";
import { type ProductItemFragment } from "@/gql/graphql";

type ProductProps = {
	product: ProductItemFragment;
};
export const Product = ({ product }: ProductProps) => {
	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, product.id);
		revalidateTag("cart");
	}
	return (
		<article className="mx-auto my-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
			{product.images[0] && (
				<ProductCoverImage
					src={product.images[0].url}
					alt={product.name}
					width={320}
					height={200}
				/>
			)}
			<aside>
				<ProductDescription product={product} />
				<form action={addProductToCartAction}>
					<AddToCartButton />
				</form>
			</aside>
		</article>
	);
};
