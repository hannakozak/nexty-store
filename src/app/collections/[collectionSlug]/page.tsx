import { notFound } from "next/navigation";
import { getProductsByCollectionSLug, getProductsTotalCountByCollectionSlug } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";
import { Pagination } from "@/components/Pagination/Pagination";

type CollectionPageProps = {
	params: Promise<{
		collectionSlug: string;
	}>;
	searchParams: Promise<{
		page: string;
		query?: string;
	}>;
};

export default async function CollectionPage({ params, searchParams }: CollectionPageProps) {
	const { collectionSlug } = await params;
	const { query = "", page = "1" } = await searchParams;
	const currentPage = Number(page) || 1;

	const productsTotalCount = await getProductsTotalCountByCollectionSlug(collectionSlug);
	const totalPages = Math.ceil(productsTotalCount / 8);

	const products = await getProductsByCollectionSLug(collectionSlug, currentPage, query);
	if (!products) {
		return notFound();
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<ProductsList products={products} />
			<Pagination totalPages={totalPages} />
		</div>
	);
}
