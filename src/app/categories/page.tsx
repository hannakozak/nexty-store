import { notFound } from "next/navigation";
import { getCategoriesList } from "@/api/categories";
import { CategoriesList } from "@/components/CategoriesList/CategoriesList";

type CategoriesPageProps = {
	searchParams: Promise<{ query?: string }>;
};

export default async function CategoryProductPage({ searchParams }: CategoriesPageProps) {
	const { query = "" } = await searchParams;

	const categories = await getCategoriesList(query);
	if (!categories) {
		notFound();
	}

	return <CategoriesList categories={categories} />;
}
