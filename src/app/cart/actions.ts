"use server";

import { revalidatePath } from "next/cache";
import { CartRemoveProductDocument, CartChangeItemQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
	});
	revalidatePath("/cart");
};
