import { notFound } from "next/navigation";
import { getCollectionsList } from "@/api/collections";
import { CollectionsList } from "@/components/CollectionsList/CollectionsList";

export default async function CollectionsPage() {
	const collections = await getCollectionsList();
	if (!collections) {
		notFound();
	}

	return <CollectionsList collections={collections} />;
}
