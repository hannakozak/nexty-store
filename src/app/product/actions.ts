"use server";

import { revalidatePath } from "next/cache";
import { createReview, publishReview } from "@/api/reviews";
import { type ReviewItemFragment } from "@/gql/graphql";

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
	revalidatePath(`/product/${productId}`);
	revalidatePath(`/products`);
};
