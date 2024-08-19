import { ProductListItem } from "@/components/productsList/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsList = async ({ products }: { products: ProductListItemFragment[] }) => {
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
