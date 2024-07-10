import { notFound } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";

const ProductsPage = async () => {
	const products = await getProductsList();
	if (!products) {
		notFound();
	}
	return (
		<>
			<ProductsList products={products} />
		</>
	);
};
export default ProductsPage;
