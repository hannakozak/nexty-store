import { notFound } from "next/navigation";
import { getProductsByCategorySLug, getProductsTotalCountByCategorySlug } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";
import { Pagination } from "@/components/Pagination/Pagination";

type CategoryPageProps = {
	params: { categorySlug: string };
	searchParams: { page: string; query?: string };
};

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;
	const productsTotalCount = await getProductsTotalCountByCategorySlug(params.categorySlug);
	const totalPages = Math.ceil(productsTotalCount / 8);

	const products = await getProductsByCategorySLug(params.categorySlug, currentPage, query);
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
