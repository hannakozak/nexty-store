import { type CategoryFragment } from "@/gql/graphql";

export const CategoriesList = async ({ categories }: { categories: CategoryFragment[] }) => {
	return (
		<ul className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{categories.map((category) => {
				return <li key={category.id}>{category.name}</li>;
			})}
		</ul>
	);
};
