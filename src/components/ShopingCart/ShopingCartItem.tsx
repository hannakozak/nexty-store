import Link from "next/link";
import { type CartOrderItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/formatMoney";
import { ProductCoverImage } from "@/components/productsList/ProductCoverImage";
import { ChangeProductQuantity } from "@/app/cart/ChangeItemQuantity";

type ShoppingCartItemProps = {
	item: CartOrderItemFragmentFragment;
};

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
	if (!item.product) {
		return null;
	}

	return (
		<>
			<div className="flex max-w-2xl border-t-2 border-t-gray-200 px-4 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="w-1/4">
					{item.product.images && (
						<Link href={`/product/${item.product.id}`}>
							<ProductCoverImage
								src={item.product.images[0].url}
								alt={item.product.name}
								width={320}
								height={200}
							/>
						</Link>
					)}
				</div>
				<Link href={`/product/${item.product.id}`}>
					<div className="ml-5 w-full text-sm font-semibold leading-6 text-gray-500">
						{item.product.name}
					</div>
				</Link>

				<div className="flex w-full justify-center self-start text-center text-sm font-semibold leading-6 text-gray-500">
					<ChangeProductQuantity quantity={item.quantity} itemId={item.id} />
				</div>

				<div className="text-right text-sm font-semibold leading-6 text-gray-900">
					{formatMoney(item.product.price / 100)}
				</div>
			</div>
		</>
	);
};
