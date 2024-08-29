"use client";

import { useOptimistic } from "react";
import { useRouter } from "next/navigation";
import { changeItemQuantity } from "@/app/cart/actions";

type ChangeProductQuantityProps = {
	quantity: number;
	itemId: string;
};

export const ChangeProductQuantity = ({ quantity, itemId }: ChangeProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	const router = useRouter();
	return (
		<form className="flex items-center gap-3">
			<button
				data-testid="decrement"
				className="h-8 w-8 border bg-slate-50"
				formAction={async () => {
					if (optimisticQuantity === 1) {
						return;
					}
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
					router.refresh();
				}}
			>
				-
			</button>
			<div data-testid="quantity">{optimisticQuantity}</div>
			<button
				data-testid="increment"
				className="h-8 w-8 border bg-slate-50"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
					router.refresh();
				}}
			>
				+
			</button>
		</form>
	);
};
