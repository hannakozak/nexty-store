import { executeGraphql } from "./graphqlApi";
import { CategoriesGetListDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CategoriesGetListDocument,
		variables: {},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.categories;
};
