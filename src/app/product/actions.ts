"use server";

import { revalidatePath } from "next/cache";
import { createReview, publishReview } from "@/api/reviews";
import {
	ProductGetReviewsRatingDocument,
	ProductUpdateAverageRatingDocument,
	type ReviewItemFragment,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const addReviewAction = async (productId: string, formData: FormData) => {
	const reviewForm: ReviewItemFragment = {
		id: productId,
		headline: String(formData.get("headline")),
		content: String(formData.get("content")),
		rating: Number(formData.get("rating")),
		name: String(formData.get("name")),
		email: String(formData.get("email")),
	};

	const { createReview: reviewId } = await createReview(reviewForm);

	if (!reviewId) {
		throw TypeError("Failed to create review. Please try again later.");
	}

	await publishReview(reviewId.id);

	let averageRating = 0;

	const productReviewsRating = await executeGraphql({
		query: ProductGetReviewsRatingDocument,
		variables: {
			id: productId,
		},
	});

	if (productReviewsRating && productReviewsRating.reviewsConnection.edges.length > 0) {
		const total = productReviewsRating.reviewsConnection.edges.reduce((acc, edge) => {
			return acc + edge.node.rating;
		}, 0);

		averageRating =
			total === 0 ? 0 : Math.floor(total / productReviewsRating.reviewsConnection.aggregate.count);
	}

	await executeGraphql({
		query: ProductUpdateAverageRatingDocument,
		variables: {
			id: productId,
			averageRating,
		},
		cache: "no-store",
	});

	revalidatePath(`/product/${productId}`);
	revalidatePath(`/products`);
};
