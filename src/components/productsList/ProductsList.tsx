import { getProductsList } from "@/api/products";
import { ProductListItem } from "@/components/productsList/ProductListItem";

export const ProductList = async () => {
	const products = await getProductsList();
	return (
		<ul
			data-testid="products-list"
			className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
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
