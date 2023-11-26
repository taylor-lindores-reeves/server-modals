/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "fakestoreapi.com"
			}
		]
	}
};

module.exports = nextConfig;
