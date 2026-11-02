import { getCollectionsList } from "@/api/collections";
import { CollectionsList } from "@/components/CollectionsList/CollectionsList";
import { ActiveLink } from "@/components/Navigation/ActiveLink";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Home() {
	const collections = await getCollectionsList();
	if (!collections) {
		notFound();
	}

	return (
		<main>
			<section className="mt-24 flex min-h-[calc(100vh-86px)] w-full flex-col items-center gap-10 px-6 py-12 md:mt-0 md:flex-row md:gap-8 md:px-10 lg:px-16">
				<div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
					<span className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-900">
						Handcrafted with love
					</span>

					<h2 className="mb-6 max-w-xl text-3xl font-medium leading-tight text-stone-900 md:text-4xl lg:text-[42px]">
						Create Your Moment of Calm
					</h2>

					<p className="max-w-lg text-base leading-7 text-stone-600 lg:text-[15px]">
						Discover beautifully handcrafted scented candles designed to bring warmth, relaxation
						and elegance into your home. Find your perfect fragrance and make every moment special.
					</p>

					<ActiveLink href="/products?page=1" exact={true} className="mt-8" activeClassName="">
						<button className="rounded-lg bg-amber-900 px-12 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:bg-amber-950 hover:shadow-md">
							View Products
						</button>
					</ActiveLink>
				</div>

				<div className="w-full md:w-1/2">
					<Image
						src="/images/front-image.png"
						alt="Handcrafted scented candle collection"
						width={650}
						height={650}
						priority
						className="h-auto w-full object-contain"
					/>
				</div>
			</section>

			<section className="px-6 py-16">
				<h2 className="mb-8 text-center text-3xl font-medium text-stone-900">
					Check our Collections
				</h2>
				<CollectionsList collections={collections} />
			</section>
		</main>
	);
}
