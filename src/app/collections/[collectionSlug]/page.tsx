import { notFound } from "next/navigation";
import { getProductsByCollectionSLug } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";

type CollectionPageProps = {
	params: { collectionSlug: string };
};

export default async function CollectionPage({ params }: CollectionPageProps) {
	const products = await getProductsByCollectionSLug(params.collectionSlug);
	if (!products) {
		return notFound();
	}

	return (
		<>
			<ProductsList products={products} />
		</>
	);
}
