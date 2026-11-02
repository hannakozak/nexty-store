"use client";

import { type UrlObject } from "url";
import { type Route } from "next";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ActiveLink } from "@/components/Navigation/ActiveLink";

type NavLinksProps = {
	href: Route<string> | UrlObject;
	label: string;
	exact: boolean;
};

const navLinks: NavLinksProps[] = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "Products", exact: false },
	{ href: "/categories", label: "Categories", exact: false },
	{ href: "/collections", label: "Collections", exact: false },
];

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="flex items-center">
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 lg:hidden"
			>
				<span className="sr-only">Open main menu</span>
				<Menu className={`fill-current ${isOpen ? "hidden" : "block"}`} />
				<X className={`fill-current ${isOpen ? "block" : "hidden"}`} />
			</button>

			<div
				className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${
					isOpen ? "block" : "hidden"
				}`}
			>
				<ul className="flex flex-col lg:w-auto lg:flex-row lg:items-center lg:gap-8">
					{navLinks.map(({ href, label, exact }) => (
						<li key={label} className="block py-2 lg:px-0" onClick={() => setIsOpen(!isOpen)}>
							<ActiveLink
								href={href}
								exact={exact}
								className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-900"
								activeClassName="text-amber-900 border-b-2 border-amber-900 pb-1"
							>
								{label}
							</ActiveLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
