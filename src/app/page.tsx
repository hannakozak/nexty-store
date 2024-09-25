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
			<section className="mt-24 flex min-h-screen w-full flex-col items-center gap-10 md:mt-0 md:flex-row md:gap-5">
				<div className="md:text-md prose flex w-full flex-col px-3 text-center text-sm md:w-1/2 md:px-0 xl:px-8">
					<h2>
						Ignite Your Senses
						<br />
						Premium Handcrafted Candles for Every Mood
					</h2>
					<p>
						Discover the art of relaxation with our luxurious collection of scented candles,
						designed to elevate your space and soothe your soul. Hand-poured with care, each candle
						offers a unique sensory experience. Light up your moments with elegance.
					</p>
					<ActiveLink
						href="/products?page=1"
						exact={true}
						className="font-semibold text-gray-600 hover:text-gray-800"
						activeClassName="text-gray-800 border border-2 border-b-gray-800"
					>
						<button className="brighness-100 font-semiboldbold mx-auto mt-8 flex w-1/2 justify-center rounded-md bg-amber-900 py-2 align-middle text-white shadow-md hover:brightness-125 disabled:cursor-wait disabled:brightness-50">
							View Products
						</button>
					</ActiveLink>
				</div>
				<div className="w-full md:w-1/2">
					<Image src="/images/front-image.png" alt="sense candles" width={650} height={650} />
				</div>
			</section>
			<section>
				<h2 className="">Check our Collections</h2>
				<CollectionsList collections={collections} />
			</section>
		</main>
	);
}
