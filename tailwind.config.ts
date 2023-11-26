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
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				}
			},
			animation: {
				fadeIn: "fadeIn 0.2s ease-out forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};
export default config;
