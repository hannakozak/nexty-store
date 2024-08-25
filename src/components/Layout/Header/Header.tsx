import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";
import { SearchInput } from "@/components/Layout/Header/SearchInput";
import { Navigation } from "@/components/Navigation/Navigation";
import { getCartFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartFromCookies();
	const totalQuantity = cart?.orderItems.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<header className="fixed top-0 flex w-full border-b-2 bg-white px-6 py-3 lg:flex-row">
			<Navigation />
			<nav className="fixed right-2 flex gap-3">
				<Link href={"/cart"} className="group -m-2 flex items-center p-2">
					<ShoppingCart />
					<span className="ml-2 text-sm font-medium">{totalQuantity}</span>
					<span className="sr-only">Items in cart, view bag</span>
				</Link>
				<Suspense>
					<SearchInput />
				</Suspense>
			</nav>
		</header>
	);
};
