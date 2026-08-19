import { notFound } from "next/navigation";
import { getProductById } from "@/api/product";
import { type ProductListItemFragment } from "@/gql/graphql";
import { Product } from "@/components/Product/Product";
import { getReviewsByProductId } from "@/api/reviews";
import { AddReview } from "@/app/product/AddReview";

type SingleProductPageProps = {
	params: Promise<{
		productId: string;
	}>;
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const { productId } = await params;
	const product = await getProductById(productId);
	if (!product) {
		return notFound();
	}

	const reviews = await getReviewsByProductId(productId);

	return (
		<>
			<Product product={product} />
			<aside>
				<AddReview reviews={reviews} productId={productId} />
			</aside>
		</>
	);
}
