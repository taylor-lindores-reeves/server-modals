import { Suspense } from "react";

import { ProductModal } from "@/components/product-modal";
import { ProductCard } from "@/components/product-card";
import { ProductLayout } from "@/components/layouts/product-layout";
import { ProductLoading } from "@/components/ui/product-loading";
import { PRODUCT_API } from "@/lib/constants";

export type Props = {
	searchParams: Record<string, string> | null | undefined;
};

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number };
};

export default async function HomePage(props: Props) {
	const { searchParams } = props;
	const showModal = searchParams?.modal === "true";
	const productId = searchParams?.id;

	const response = await fetch(PRODUCT_API, { next: { revalidate: 60 * 60 } });
	const products = await response.json();

	return (
		<>
			<ProductLayout>
				{products.map((product: Product, idx: number) => {
					return <ProductCard key={idx} {...product} />;
				})}
			</ProductLayout>

			{showModal && (
				<Suspense key={productId} fallback={<ProductLoading />}>
					<ProductModal id={productId} />
				</Suspense>
			)}
		</>
	);
}
