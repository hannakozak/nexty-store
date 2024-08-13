import { notFound } from "next/navigation";
import { getProductsByCategorySLug } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";

type CategoryPageProps = {
	params: { categorySlug: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
	const products = await getProductsByCategorySLug(params.categorySlug);
	if (!products) {
		return notFound();
	}

	return (
		<>
			<ProductsList products={products} />
		</>
	);
}
