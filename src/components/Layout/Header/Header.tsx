import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { SearchInput } from "@/components/Layout/Header/SearchInput";
import { Navigation } from "@/components/Navigation/Navigation";
import { getCartFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartFromCookies();
	const totalQuantity = cart?.orderItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header className="fixed top-0 flex flex-col bg-white">
			<div className="mx-auto h-12 w-20">
				<NextImage
					src="/images/Nexty.png"
					width={400}
					height={400}
					alt="Picture of the author"
					className="aspect-square object-contain object-center"
				/>
			</div>
			<div className="flex w-full border-b-2 px-6 py-3 lg:flex-row lg:justify-between">
				<Navigation />
				<nav className="fixed right-2 flex gap-3">
					<Link href={"/cart"} className="group -m-2 flex items-center p-2">
						<ShoppingCart />
						{cart && <span className="ml-2 text-sm font-medium">{totalQuantity}</span>}
						<span className="sr-only">Items in cart, view bag</span>
					</Link>
					<Suspense>
						<SearchInput />
					</Suspense>
				</nav>
			</div>
		</header>
	);
};
