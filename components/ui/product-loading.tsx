import React from "react";
import { Card } from "./card";
import Link from "next/link";

export const ProductLoading = () => {
	return (
		<Card className="fixed inset-0 flex items-center justify-center z-10 animate-fadeIn">
			<Link
				className="fixed inset-0 bg-black opacity-75 cursor-default"
				href="/products"
				scroll={false}
			/>
			<div className="relative w-full max-w-3xl bg-white rounded-md shadow-md">
				<div className="flex justify-between items-start">
					<Link
						className="absolute top-2.5 right-2.5 h-6 w-6 bg-black text-white rounded justify-center items-center flex pb-0.5"
						href="/products"
						scroll={false}
					>
						&times;
						<span className="sr-only">Close Modal</span>
					</Link>
				</div>
				<div className="bg-white rounded-lg max-w-3xl mx-auto p-3 space-y-4 overflow-auto z-20">
					<div className="grid gap-4 md:grid-cols-2 items-start">
						<div className="aspect-square w-full relative bg-gray-300 rounded-lg animate-pulse" />
						<div className="space-y-2">
							<h1 className="py-1 bg-gray-300 animate-pulse w-[90%]">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</h1>
							<h1 className="py-1 bg-gray-300 animate-pulse">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</h1>
							<div className="flex items-center gap-4">
								<div className="w-12 bg-gray-300 animate-pulse">&nbsp;</div>
								<div className="w-12 bg-gray-300 animate-pulse">&nbsp;</div>
							</div>
							<p className="text-sm h-full leading-loose bg-gray-300 animate-pulse">
								&nbsp;
								<br />
								&nbsp;
								<br />
								&nbsp;
								<br />
								&nbsp;
							</p>
							<p className="w-28 animate-pulse bg-gray-300">&nbsp;</p>
						</div>
					</div>
				</div>
				<div className="px-3 pb-3">
					<div className="rounded-sm py-5 px-3 w-full animate-pulse bg-gray-300" />
				</div>
			</div>
		</Card>
	);
};
