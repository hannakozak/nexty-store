import { type CartOrderItemFragmentFragment } from "@/gql/graphql";

export const geTotalQuantity = (orders: CartOrderItemFragmentFragment[]) => {
	return orders.reduce((acc, item) => acc + item.quantity, 0);
};
