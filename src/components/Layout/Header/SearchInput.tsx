"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchInput = () => {
	const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("search");
		setIsMobileSearchOpen(false);
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
				<form
					onSubmit={handleSearch}
					className="relative mx-auto mt-4 flex w-11/12 items-center rounded-full border border-gray-300 bg-white px-2 py-2 md:mt-0 md:w-64"
				>
					<input
						type="text"
						className="flex-grow px-2 pl-5 focus:outline-none"
						placeholder="Search..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button type="submit" className="absolute right-3">
						<Search className="h-6 w-6" />
					</button>
				</form>
			</div>
		</div>
	);
};
