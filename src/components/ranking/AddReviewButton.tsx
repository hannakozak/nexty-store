import { useFormStatus } from "react-dom";

export const AddReviewButton = () => {
	const formStatus = useFormStatus();
	formStatus.pending;
	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="brighness-100 font-semiboldbold mt-8 flex w-full justify-center rounded-md bg-amber-900 py-2 align-middle text-white shadow-md hover:brightness-125 disabled:cursor-wait disabled:brightness-50"
		>
			Add Review
		</button>
	);
};
