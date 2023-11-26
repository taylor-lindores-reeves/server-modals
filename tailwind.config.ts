import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#AECC39",
				secondary: "#404436",
				accent: "#D1E67D",
				background: "#ededed"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};
export default config;
