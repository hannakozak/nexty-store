import { notFound } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ProductListItem } from "@/components/productsList/ProductListItem";

export const ProductsList = async ({ currentPage }: { currentPage: number }) => {
	const products = await getProductsList(currentPage);
	if (!products) {
		notFound();
	}
	return (
		<ul className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{products.map((product) => {
				return (
					<li key={product.id}>
						<ProductListItem product={product} />
					</li>
				);
			})}
		</ul>
	);
};
