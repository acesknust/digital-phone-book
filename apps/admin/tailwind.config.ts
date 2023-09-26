import type { Config } from "tailwindcss";


const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"../../packages/uicore/tailwind.config.ts",
		"../../packages/uicore/src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
export default config;
