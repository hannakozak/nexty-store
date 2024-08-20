import { notFound } from "next/navigation";
import { getProductsList, getProductsTotalCount } from "@/api/products";
import { Pagination } from "@/components/Pagination/Pagination";
import { ProductsList } from "@/components/productsList/ProductsList";

type HomePageProps = {
	searchParams: { page: number; query?: string };
};

export default async function Home({ searchParams }: HomePageProps) {
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;

	const productsTotalCount = await getProductsTotalCount();
	const totalPages = Math.ceil(productsTotalCount / 8);

	const products = await getProductsList(query, currentPage);
	if (!products) {
		notFound();
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="mt-5 flex w-full justify-center">
				<ProductsList products={products} />
			</div>
			<Pagination totalPages={totalPages} />
		</main>
	);
}
