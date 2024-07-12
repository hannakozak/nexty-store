import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.collections;
};
