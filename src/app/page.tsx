import Image from "next/image";

export default async function Home() {
	return (
		<main className="mt-24 flex min-h-screen w-full flex-col items-center gap-10 md:mt-0 md:flex-row md:gap-5">
			<div className="md:text-md prose flex w-full flex-col px-3 text-center text-sm md:w-1/2 md:px-0 xl:px-8">
				<h2>
					Ignite Your Senses
					<br />
					Premium Handcrafted Candles for Every Mood
				</h2>
				<p>
					Discover the art of relaxation with our luxurious collection of scented candles, designed
					to elevate your space and soothe your soul. Hand-poured with care, each candle offers a
					unique sensory experience. Light up your moments with elegance.
				</p>
				<button className="brighness-100 font-semiboldbold mx-auto mt-8 flex w-1/2 justify-center rounded-md bg-amber-900 py-2 align-middle text-white shadow-md hover:brightness-125 disabled:cursor-wait disabled:brightness-50">
					View Products
				</button>
			</div>
			<div className="w-full md:w-1/2">
				<Image src="/images/front-image.png" alt="sense candles" width={650} height={650} />
			</div>
		</main>
	);
}
