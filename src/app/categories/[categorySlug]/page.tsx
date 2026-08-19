import { notFound } from "next/navigation";
import { getProductsByCategorySLug, getProductsTotalCountByCategorySlug } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";
import { Pagination } from "@/components/Pagination/Pagination";

type CategoryPageProps = {
	params: Promise<{
		categorySlug: string;
	}>;
	searchParams: Promise<{ page: string; query?: string }>;
};

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
	const { categorySlug } = await params;
	const { query = "", page = "1" } = await searchParams;
	const currentPage = Number(page) || 1;
	const productsTotalCount = await getProductsTotalCountByCategorySlug(categorySlug);
	const totalPages = Math.ceil(productsTotalCount / 8);

	const products = await getProductsByCategorySLug(categorySlug, currentPage, query);
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
