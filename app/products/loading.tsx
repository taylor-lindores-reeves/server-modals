import { ProductLayout } from "@/components/layouts/product-layout";

const Loading = () => {
	return (
		<ProductLayout>
			{new Array(10).fill(0).map((_, idx) => {
				return (
					<div
						key={idx}
						className="max-w-sm rounded-lg overflow-hidden shadow-lg border-zinc-300 flex flex-col"
					>
						<div className="relative h-[372px] w-full animate-pulse bg-gray-300 rounded-t-lg" />
						<div className="px-6 py-4 space-y-4 flex-grow relative flex flex-col">
							<div className="animate-pulse bg-gray-300">&nbsp;</div>
							<p className="animate-pulse bg-gray-300">
								&nbsp;
								<br />
								&nbsp;
								<br />
							</p>
							<div className="flex gap-2 whitespace-nowrap flex-wrap">
								<span className="w-32 py-1 rounded-lg animate-pulse bg-gray-300">
									&nbsp;
								</span>
								<span className="w-32 py-1 rounded-lg animate-pulse bg-gray-300">
									&nbsp;
								</span>
								<span className="w-32 py-1 rounded-lg animate-pulse bg-gray-300">
									&nbsp;
								</span>
							</div>
							<div className="py-2.5 rounded-sm flex-grow flex items-end animate-pulse bg-gray-300">
								&nbsp;
							</div>
						</div>
					</div>
				);
			})}
		</ProductLayout>
	);
};

export default Loading;
