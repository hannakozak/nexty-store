import { type CartFragment } from "@/gql/graphql";
import { calculateTotalAmount } from "@/utils/calculateTotalAmount";
import { getTotalPrice } from "@/utils/getTotalPrice";

type CartSummaryProps = {
	cart: CartFragment;
};

export const ShoppingCartSummary = ({ cart }: CartSummaryProps) => {
	return (
		<>
			<h2 className="mb-5 mt-5 text-center text-sm font-semibold text-gray-600 md:mt-0">Summary</h2>
			<table className="w-full">
				<tbody>
					<tr>
						<td>Click & Collect</td>
						<td className="text-right">Free</td>
					</tr>
					<tr>
						<td>UK Standard Delivery</td>
						<td className="text-right">from £4.75</td>
					</tr>
					<tr>
						<td className="pt-8">Total:</td>
						<td className="pt-8 text-right">
							£{calculateTotalAmount(cart.orderItems.reduce(getTotalPrice, 0) / 100)}
						</td>
					</tr>
					<tr>
						<td className="text-gray-400">Excluding UK Standard Delivery</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
