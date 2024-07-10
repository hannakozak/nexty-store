import { notFound } from "next/navigation";
import { ProductsList } from "@/components/productsList/ProductsList";
import { getProductsList } from "@/api/products";

export default async function Home() {
	const products = await getProductsList();
	if (!products) {
		notFound();
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<ProductsList products={products} />
		</main>
	);
}
