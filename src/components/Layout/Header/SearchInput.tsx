"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const { replace } = useRouter();
	const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

	const handleSearch = (term: string) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="relative flex items-center justify-end md:justify-start">
			<button className="p-2 md:hidden" onClick={() => setIsMobileSearchOpen(true)}>
				<Search className="h-6 w-6" />
			</button>

			{isMobileSearchOpen && (
				<div className="fixed inset-0 z-10" onClick={() => setIsMobileSearchOpen(false)}></div>
			)}

			<div
				className={`${
					isMobileSearchOpen ? "fixed left-0 right-0 top-0 z-20" : "hidden"
				} w-full md:static md:block md:w-auto`}
			>
				<div className="relative mx-auto mt-4 flex w-11/12 items-center rounded-full border border-gray-300 bg-white px-2 py-2 md:mt-0 md:w-64">
					<label htmlFor="search" className="sr-only">
						Search
					</label>
					<input
						type="text"
						className="flex-grow px-2 pl-5 focus:outline-none"
						placeholder="Search..."
						defaultValue={searchParams.get("query")?.toString()}
						onChange={(e) => handleSearch(e.target.value)}
					/>

					<Search className="absolute right-3 h-6 w-6" />
				</div>
			</div>
		</div>
	);
};
