import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { ShoppingCartItem } from "@/components/ShopingCart/ShopingCartItem";
import { ShoppingCartSummary } from "@/components/ShopingCart/ShoppingCartSummary";
import { handleStripePaymentAction } from "@/app/cart/actions";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-24 flex w-full flex-col text-sm font-semibold text-gray-600 md:flex-row md:gap-12">
			<div className="w-full md:w-2/3">
				<div className="mx-8 mb-5 flex justify-between">
					<h2>Shopping Basket</h2>
					<p>Price</p>
				</div>

				{cart.orderItems.map((item) => (
					<ShoppingCartItem item={item} key={item.id} />
				))}
			</div>

			<div className="w-full px-5 md:w-1/3">
				<ShoppingCartSummary cart={cart} />
				<form action={handleStripePaymentAction} className="my-10">
					<button
						type="submit"
						className="brighness-100 font-semiboldbold flex w-full justify-center rounded-md bg-amber-900 py-2 align-middle text-white shadow-md hover:brightness-125 disabled:cursor-wait disabled:brightness-50"
					>
						Checkout
					</button>
				</form>
			</div>
		</div>
	);
}
