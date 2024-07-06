import { ShoppingCart } from "lucide-react";
import { SearchInput } from "@/components/Layout/Header/SearchInput";
import { Navigation } from "@/components/Navigation/Navigation";

export const Header = () => {
	return (
		<header className="fixed top-0 flex w-full border-b-2 bg-white px-6 py-3 lg:flex-row">
			<Navigation />
			<nav className="fixed right-2 flex gap-3">
				<div className="group -m-2 flex items-center p-2">
					<ShoppingCart />
				</div>
				<SearchInput />
			</nav>
		</header>
	);
};
