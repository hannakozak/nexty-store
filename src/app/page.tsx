import { ProductList } from "@/components/productsList/ProductsList";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<ProductList />
		</main>
	);
}
