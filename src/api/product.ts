import { executeGraphql } from "@/api/graphqlApi";
import { ProductGetByIdDocument, type ProductListItemFragment } from "@/gql/graphql";

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: id,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.product;
};
