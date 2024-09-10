import { notFound } from "next/navigation";
import { getProductById } from "@/api/product";
import { type ProductListItemFragment } from "@/gql/graphql";
import { Product } from "@/components/Product/Product";
import { getReviewsByProductId } from "@/api/reviews";
import { AddReview } from "@/app/product/AddReview";

type SingleProductPageProps = {
	params: { productId: ProductListItemFragment["id"] };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);
	if (!product) {
		return notFound();
	}

	const reviews = await getReviewsByProductId(params.productId);

	return (
		<>
			<Product product={product} />
			<aside>
				<AddReview reviews={reviews} productId={params.productId} />
			</aside>
		</>
	);
}
