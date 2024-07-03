import Image from "next/image";
import { getProductsList } from "@/api/products";

export const ProductList = async () => {
	const products = await getProductsList();
	return (
		<ul className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{products.map((product) => (
				<div key={product.id}>
					<div>
						<Image src={product.images[0].url} alt={product.name} width={50} height={50} />
						<p>{product.name}</p>
					</div>
					<div>{product.price}</div>
				</div>
			))}
		</ul>
	);
};
