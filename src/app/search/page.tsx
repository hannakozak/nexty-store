import { getProductsList } from "@/api/products";
import { ProductsList } from "@/components/productsList/ProductsList";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: {
		query: string;
		page: string;
	};
}) {
	const query = searchParams.query || "";
	const currentPage = Number(searchParams?.page) || 1;
	const products = await getProductsList(query, currentPage);
	if (!products) {
		notFound();
	}

	return (
		<Suspense fallback={<h2>Loading...</h2>}>
			<ProductsList products={products} />
		</Suspense>
	);
}
