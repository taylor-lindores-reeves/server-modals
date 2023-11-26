import React from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Card } from "@/components/ui/card";
import { PRODUCT_API } from "@/lib/constants";
import { Product } from "@/app/products/page";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const ProductModal = async ({ id }: { id?: string }) => {
	if (!id || isNaN(parseInt(id, 10))) {
		redirect("/products");
	}

	const response = await fetch(PRODUCT_API + parseInt(id, 10));
	const product = (await response.json()) as Product;

	return (
		<Card
			className={cn(
				"fixed inset-0 flex items-center justify-center z-10 opacity-0 transition-opacity duration-500",
				product && "opacity-100"
			)}
		>
			<Link
				href="/products"
				className="fixed inset-0 bg-black opacity-75 cursor-default"
			/>
			<div className="relative w-full max-w-3xl bg-white rounded-md shadow-md">
				<div className="flex justify-between items-start">
					<Link
						className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5"
						href="/products"
					>
						&times;
						<span className="sr-only">Close Modal</span>
					</Link>
				</div>
				<div className="bg-white rounded-lg max-w-3xl mx-auto p-3 space-y-4 overflow-auto z-20">
					<div className="grid gap-4 md:grid-cols-2 items-start">
						<div className="aspect-square w-full relative bg-white rounded-t-lg">
							<Image
								alt={product.title}
								className="object-contain w-full rounded-lg overflow-hidden"
								fill={true}
								priority={true}
								loading="eager"
								src={product.image}
							/>
						</div>
						<div className="space-y-2">
							<h1 className="font-bold text-2xl sm:text-3xl max-w-[90%]">
								{product.title}
							</h1>
							<div className="flex items-center gap-4">
								⭐ {product.rating.rate}
								<span className="text-sm text-zinc-500">
									({product.rating.count})
								</span>
							</div>
							<p className="text-sm leading-loose">{product.description}</p>
							<span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
								{product.category}
							</span>
						</div>
					</div>
				</div>
				<div className="pb-3 px-3">
					<Button
						variant="secondary"
						size="lg"
						className="bg-secondary justify-center flex text-center w-full border rounded px-3 py-2 text-white hover:bg-white transition-colors duration-300 hover:text-zinc-900 border-zinc-300 hover:border-zinc-900"
					>
						Buy Now
					</Button>
				</div>
			</div>
		</Card>
	);
};
