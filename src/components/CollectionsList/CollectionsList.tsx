import { type CollectionFragment } from "@/gql/graphql";

export const CollectionsList = async ({ collections }: { collections: CollectionFragment[] }) => {
	return (
		<ul className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{collections.map((collection) => {
				return <li key={collection.id}>{collection.name}</li>;
			})}
		</ul>
	);
};
