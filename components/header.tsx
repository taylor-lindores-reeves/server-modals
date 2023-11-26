import Link from "next/link";

export const Header = () => {
	return (
		<div className="w-full bg-secondary justify-center flex gap-x-4 border-b py-3">
			<Link
				className="transition-all duration-300 ease-linear hover:text-accent text-white"
				href="/"
			>
				Home
			</Link>
			<Link
				className="transition-all duration-300 ease-linear hover:text-accent text-white"
				href="/products"
			>
				Products
			</Link>
		</div>
	);
};
