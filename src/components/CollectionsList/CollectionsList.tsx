import { ProductCoverImage } from "@/components/productsList/ProductCoverImage";
import { type CollectionFragment } from "@/gql/graphql";

export const CollectionsList = async ({ collections }: { collections: CollectionFragment[] }) => {
	return (
		<ul className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{collections.map((collection) => (
				<li key={collection.id}>
					<ProductCoverImage
						src={collection.image.url}
						alt={collection.name}
						width={256}
						height={256}
					/>
					<h2 className="my-3 text-center text-sm font-semibold text-gray-700">
						{collection.name}
					</h2>
				</li>
			))}
		</ul>
	);
};
