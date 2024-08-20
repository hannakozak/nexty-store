import { executeGraphql } from "./graphqlApi";
import { CategoriesGetListDocument } from "@/gql/graphql";

export const getCategoriesList = async (query: string) => {
	const graphqlResponse = await executeGraphql({
		query: CategoriesGetListDocument,
		variables: {
			query: query,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.categories;
};
