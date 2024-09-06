import { type CartOrderItemFragmentFragment } from "@/gql/graphql";

export const getTotalPrice = (total: number, item: CartOrderItemFragmentFragment): number => {
	if (!item.product) {
		throw new Error("Missing product price");
	}
	return total + item.product.price * item.quantity;
};
