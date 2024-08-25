import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils/formatMoney";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-10" aria-busy={false}>
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-12 text-center">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>{item.product.name}</td>
									<td>{item.quantity}</td>
									<td>{formatMoney(item.product.price / 100)}</td>
								</tr>
							),
					)}
				</tbody>
			</table>
			<form className="ml-auto">
				<button
					type="submit"
					className="brighness-100 font-semiboldbold mb-10 h-14 w-1/4 rounded-md bg-gradient-to-r from-gray-900 to-amber-600 text-xl text-white shadow-md hover:brightness-125 disabled:cursor-wait disabled:brightness-50"
				>
					Pay
				</button>
			</form>
		</div>
	);
}
