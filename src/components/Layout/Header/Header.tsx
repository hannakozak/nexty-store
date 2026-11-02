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
		<header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
				<div className="justify-start">
					<Navigation />
				</div>
				<Link href="/" className="shrink-0">
					<NextImage
						src="/images/Nexty.png"
						width={120}
						height={60}
						alt="Nexty"
						className="h-12 w-auto object-contain"
					/>
				</Link>
				<nav className="flex shrink-0 items-center gap-5">
					<Suspense>
						<SearchInput />
					</Suspense>

					<Link
						href="/cart"
						className="relative flex items-center justify-center p-2"
						aria-label={`Shopping cart, ${totalQuantity ?? 0} items`}
					>
						<ShoppingCart size={23} strokeWidth={1.7} />

						{totalQuantity ? (
							<span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-900 px-1 text-xs text-white">
								{totalQuantity}
							</span>
						) : null}
					</Link>
				</nav>
			</div>
		</header>
	);
};
