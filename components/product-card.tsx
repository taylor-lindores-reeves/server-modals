import { Product } from "@/app/products/page";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export function ProductCard(product: Product) {
	const headersList = headers();
	const pathname = headersList.get("x-pathname");
	const url = new URL(pathname ? pathname : "", "http://localhost:3000");

	url.searchParams.set("modal", "true");
	url.searchParams.set("id", product.id.toString());

	return (
		<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-zinc-900 flex flex-col">
			<div className="aspect-square w-full relative bg-white border border-zinc-300 rounded-t-lg">
				<Image
					alt="Product image"
					className="object-contain py-4"
					src={product.image}
					fill={true}
					priority={true}
					loading="eager"
				/>
			</div>
			<div className="px-6 py-4 space-y-4 flex-grow relative flex flex-col">
				<div className="font-bold text-white text-xl">
					{product.title.substring(0, 25)}...
				</div>
				<p className="text-zinc-200 text-base">
					{product.description.substring(0, 75)}...
				</p>
				<div className="flex gap-2 whitespace-nowrap flex-wrap">
					<span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-zinc-300 text-zinc-900">
						{product.category}
					</span>
					<span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-zinc-300 text-zinc-900">
						⭐ {product.rating.rate}
					</span>
					<span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-zinc-300 text-zinc-900">
						👥 {product.rating.count} Reviews
					</span>
				</div>
				<div className="flex-grow flex items-end">
					<Link
						className="justify-center flex text-center w-full border rounded px-3 py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900"
						href={url.toString()}
						scroll={false}
					>
						View More
					</Link>
				</div>
			</div>
		</div>
	);
}
