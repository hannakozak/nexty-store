"use client";

import { type UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | UrlObject;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
	className = "",
	activeClassName = "",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	let isActive = false;

	if (typeof href === "string") {
		isActive = exact ? pathname === href : pathname.startsWith(href);
	}

	if (typeof href === "object") {
		isActive = exact ? pathname === href.pathname : pathname.startsWith(href.pathname || "");
	}

	return isActive ? (
		<Link href={href} className={clsx(className, isActive && activeClassName)} aria-current>
			{children}
		</Link>
	) : (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
