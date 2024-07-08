import Link from "next/link";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "@/components/productsList/ProductCoverImage";
import { ProductListItemDescription } from "@/components/productsList/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link href={`/product/${product.id}`}>
			{product.images[0] && (
				<ProductCoverImage
					src={product.images[0].url}
					alt={product.name}
					width={256}
					height={256}
				/>
			)}
			<ProductListItemDescription product={product} />
		</Link>
	);
};
