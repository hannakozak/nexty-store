import { RatingStars } from "@/components/ranking/RankingStars";
import { type ReviewItemFragment } from "@/gql/graphql";

export const ReviewListItem = ({ review }: { review: ReviewItemFragment }) => {
	return (
		<>
			<h2>{review.headline}</h2>
			<h4>{review.name}</h4>
			<RatingStars averageRating={review.rating} readOnly />
			<p className="italic">{review.content}</p>
		</>
	);
};
