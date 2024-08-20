/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { unstable_noStore as noStore } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetListDocument,
	ProductsGetTotalCountByCategorySlugDocument,
	ProductsGetTotalCountByCollectionSlugDocument,
	ProductsGetTotalCountDocument,
} from "@/gql/graphql";

export const getProductsList = async (query: string, currentPage: number = 1) => {
	noStore();
	const productsPerPage = 8;
	const offset = (currentPage - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { query: query, productsPerPage: productsPerPage, offset: offset },
		next: {},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySLug = async (
	slug: string,
	currentPage: number = 1,
	query: string,
) => {
	const productsPerPage = 8;
	const offset = (currentPage - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: slug,
			productsPerPage: productsPerPage,
			offset: offset,
			query: query,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.categories[0].products;
};

export const getProductsByCollectionSLug = async (
	slug: string,
	currentPage: number = 1,
	query: string,
) => {
	const productsPerPage = 8;
	const offset = (currentPage - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: slug,
			productsPerPage: productsPerPage,
			offset: offset,
			query: query,
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
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsTotalCountByCategorySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetTotalCountByCategorySlugDocument,
		variables: { slug: slug },
	});
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsTotalCountByCollectionSlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetTotalCountByCollectionSlugDocument,
		variables: { slug: slug },
	});
	return graphqlResponse.productsConnection.aggregate.count;
};
