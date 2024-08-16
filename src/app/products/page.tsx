import { getProductsTotalCount } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";
import { Pagination } from "@/components/Pagination/Pagination";

type ProductsPageProps = {
	searchParams: { page: number; query?: string };
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
	const productsTotalCount = await getProductsTotalCount();
	const totalPages = Math.ceil(productsTotalCount / 8);

	return (
		<div className="flex flex-col items-center justify-center">
			<ProductsList currentPage={searchParams.page} />
			<Pagination totalPages={totalPages} />
		</div>
	);
};
export default ProductsPage;
