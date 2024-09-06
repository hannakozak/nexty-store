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
			<div className="flex max-w-2xl items-center justify-center border-t-2 border-t-gray-200 px-2 py-5 text-center align-middle sm:items-center sm:px-10 lg:max-w-7xl lg:px-8">
				<div className="flex w-full flex-col items-start sm:flex-row sm:items-center sm:gap-3">
					{item.product.images && (
						<Link href={`/product/${item.product.id}`}>
							<ProductCoverImage
								src={item.product.images[0].url}
								alt={item.product.name}
								width={120}
								height={120}
							/>
						</Link>
					)}
					<Link href={`/product/${item.product.id}`}>
						<div className="text-sm font-semibold leading-6 text-gray-500">{item.product.name}</div>
					</Link>
				</div>
				<div className="flex w-1/3 flex-col items-center justify-center gap-3">
					<p className="text-sm font-semibold text-gray-500">Quantity</p>
					<ChangeProductQuantity quantity={item.quantity} itemId={item.id} />
				</div>

				<div className="w-1/3 text-right">{formatMoney(item.product.price)}</div>
			</div>
		</>
	);
};
