import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {},
		next: {
			revalidate: 1,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySLug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: slug,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.categories[0].products;
};

export const getProductsByCollectionSLug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: slug,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.collections[0].products;
};
