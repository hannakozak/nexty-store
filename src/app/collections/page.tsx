import { notFound } from "next/navigation";
import { getCollectionsList } from "@/api/collections";
import { CollectionsList } from "@/components/CollectionsList/CollectionsList";

type CollectionsPageProps = {
	searchParams: { query?: string };
};

export default async function CollectionsPage({ searchParams }: CollectionsPageProps) {
	const query = searchParams?.query || "";

	const collections = await getCollectionsList(query);
	if (!collections) {
		notFound();
	}

	return <CollectionsList collections={collections} />;
}
