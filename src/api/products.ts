import { unstable_noStore as noStore } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetListDocument,
	ProductsGetTotalCountDocument,
} from "@/gql/graphql";

export const getProductsList = async (currentPage: number = 1) => {
	noStore();
	const productsPerPage = 8;
	const offset = (currentPage - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { productsPerPage: productsPerPage, offset: offset },
		next: {},
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

export const getProductsTotalCount = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetTotalCountDocument,
		variables: {},
	});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
	return graphqlResponse.productsConnection.aggregate.count;
};
