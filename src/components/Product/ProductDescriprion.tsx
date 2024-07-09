import { type ProductItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/formatMoney";

type ProductDescriptionProps = {
	product: ProductItemFragment;
};

export const ProductDescription = ({
	product: { name, price, description },
}: ProductDescriptionProps) => {
	return (
		<div className="prose flex flex-col">
			<h1 className="text-center text-2xl font-semibold text-gray-800">{name}</h1>
			<p className="text-xs font-bold text-gray-800 md:text-xl">
				<span className="sr-only">Cena:</span>
				{formatMoney(price)}
			</p>

			<p className="prose text-sm leading-loose text-gray-600">{description}</p>
		</div>
	);
};
