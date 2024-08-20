import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async (query: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {
			query: query,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.collections;
};
