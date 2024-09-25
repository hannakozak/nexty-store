import { notFound } from "next/navigation";
import { getCollectionsList } from "@/api/collections";
import { CollectionsList } from "@/components/CollectionsList/CollectionsList";

type CollectionsPageProps = {
	searchParams: { query?: string };
};

export default async function CollectionsPage({ searchParams }: CollectionsPageProps) {
	const collections = await getCollectionsList();
	if (!collections) {
		notFound();
	}

	return (
		<div className="mt-20">
			<CollectionsList collections={collections} />
		</div>
	);
}
