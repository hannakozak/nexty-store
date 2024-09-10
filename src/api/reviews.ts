import { executeGraphql } from "./graphqlApi";
import {
	ReviewCreateDocument,
	ReviewGetByProductIdDocument,
	type ReviewItemFragment,
	ReviewPublishDocument,
	type ProductListItemFragment,
} from "@/gql/graphql";

export const getReviewsByProductId = async (_id: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewGetByProductIdDocument,
		variables: {
			id: _id,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.reviewsConnection.edges.map((edge) => edge.node);
};

export async function createReview(review: ReviewItemFragment) {
	const reviewId = await executeGraphql({
		query: ReviewCreateDocument,
		variables: { ...review },
		next: {
			tags: ["reviews"],
		},
		cache: "no-cache",
	});

	return reviewId;
}

export async function publishReview(reviewId: string) {
	await executeGraphql({
		query: ReviewPublishDocument,
		variables: { id: reviewId },
		next: {
			tags: ["reviews"],
		},
		cache: "no-cache",
	});
}
