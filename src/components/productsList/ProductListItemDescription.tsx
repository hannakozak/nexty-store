"use client";

import { RatingStars } from "@/components/ranking/RankingStars";
import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/formatMoney";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { categories, name, price, averageRating },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="m-2">
			<div className="flex flex-row justify-between">
				<h2 className="text-sm font-semibold text-gray-700">{name}</h2>
				<p className="sr-only" data-testid="product-price">
					{price}
				</p>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena:</span>
					{formatMoney(price)}
				</p>
			</div>
			{categories[0] && (
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria</span>
					{categories[0].name}
				</p>
			)}
			{averageRating && <RatingStars averageRating={averageRating} readOnly={true} />}
		</div>
	);
};
