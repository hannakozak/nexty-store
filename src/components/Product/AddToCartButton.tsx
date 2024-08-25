"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const status = useFormStatus();
	return (
		<button
			type="submit"
			disabled={status.pending}
			className="brighness-100 font-semiboldbold my-10 mb-10 h-14 w-full rounded-md bg-amber-600 text-xl text-white shadow-md hover:bg-amber-800 disabled:cursor-wait disabled:brightness-50"
		>
			Add To Card
		</button>
	);
};
