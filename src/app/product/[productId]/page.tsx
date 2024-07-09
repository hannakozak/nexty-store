import { notFound } from "next/navigation";
import { getProductById } from "@/api/product";
import { type ProductListItemFragment } from "@/gql/graphql";
import { Product } from "@/components/Product/Product";

type SingleProductPageProps = {
	params: { productId: ProductListItemFragment["id"] };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);
	if (!product) {
		return notFound();
	}

	return (
		<>
			<Product product={product} />
		</>
	);
}
