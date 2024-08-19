import Link from "next/link";
import { ProductCoverImage } from "@/components/productsList/ProductCoverImage";
import { type CategoryFragment } from "@/gql/graphql";

export const CategoriesList = async ({ categories }: { categories: CategoryFragment[] }) => {
	return (
		<section>
			<h2 className="my-5 text-center text-xl font-semibold text-gray-700">Categories</h2>
			<ul className="mx-auto my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{categories.map((category) => (
					<li key={category.id}>
						<Link href={`/categories/${category.slug}?page=1`}>
							{category.image && (
								<ProductCoverImage
									src={category.image.url}
									alt={category.name}
									width={256}
									height={256}
								/>
							)}
							<h2 className="my-3 text-center text-sm font-semibold text-gray-700">
								{category.name}
							</h2>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
