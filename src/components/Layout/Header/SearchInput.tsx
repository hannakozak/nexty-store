import { Search } from "lucide-react";

export const SearchInput = () => {
	return (
		<form>
			<label htmlFor="search" className="flex rounded-lg border-2 p-2">
				<input
					type="search"
					name="search"
					className="w-20 focus:outline-none md:w-full"
					aria-label="Search"
				/>
				<Search />
			</label>
		</form>
	);
};
