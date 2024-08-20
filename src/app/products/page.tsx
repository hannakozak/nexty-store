import { notFound } from "next/navigation";
import { getProductsList, getProductsTotalCount } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";
import { Pagination } from "@/components/Pagination/Pagination";

type ProductsPageProps = {
	searchParams: { page: string; query?: string };
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;

	const productsTotalCount = await getProductsTotalCount();
	const totalPages = Math.ceil(productsTotalCount / 8);

	const products = await getProductsList(query, currentPage);
	if (!products) {
		notFound();
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<ProductsList products={products} />
			<Pagination totalPages={totalPages} />
		</div>
	);
};
export default ProductsPage;
