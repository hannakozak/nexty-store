import { notFound } from "next/navigation";
import { getCategoriesList } from "@/api/categories";
import { CategoriesList } from "@/components/productsList/CategoriesList/CategoriesList";

export default async function CategoryProductPage() {
	const categories = await getCategoriesList();
	if (!categories) {
		notFound();
	}

	return <CategoriesList categories={categories} />;
}
