import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { ShoppingCartItem } from "@/components/ShopingCart/ShopingCartItem";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-10 flex flex-col">
			<div>
				{cart && (
					<>
						<div className="mx-8 mb-5 flex justify-between text-sm font-semibold text-gray-700">
							<h2>Shopping Basket</h2>
							<p>Price</p>
						</div>

						{cart.orderItems.map((item) => (
							<ShoppingCartItem item={item} key={item.id} />
						))}
					</>
				)}

				<form className="ml-auto mt-12 text-center">
					<button
						type="submit"
						className="brighness-100 font-semiboldbold mb-10 h-14 w-1/4 rounded-md bg-amber-900 text-xl text-white shadow-md hover:brightness-125 disabled:cursor-wait disabled:brightness-50"
					>
						Pay
					</button>
				</form>
			</div>
		</div>
	);
}
