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
	{ href: "/products?page=1", label: "Products", exact: false },
	{ href: "/categories", label: "Categories", exact: false },
	{ href: "/collections", label: "Collections", exact: false },
];
export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="justify-center">
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
				<ul className="flex w-screen flex-col lg:flex-row">
					{navLinks.map(({ href, label, exact }) => (
						<li key={label} className="block py-2 pl-3 pr-4" onClick={() => setIsOpen(!isOpen)}>
							<ActiveLink
								href={href}
								exact={exact}
								className="font-semibold text-gray-600 hover:text-gray-800"
								activeClassName="text-gray-800 border border-2 border-b-gray-800"
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
