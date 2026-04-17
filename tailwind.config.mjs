/** @type {import('tailwindcss').Config} */
//const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	daisyui: {
		themes: [
			{
				lofi: {
					...require("daisyui/src/theming/themes")["lofi"],
					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "1.9rem"
				},
				black: {
					...require("daisyui/src/theming/themes")["black"],
					"primary": "#22C55E",
					"primary-content": "#0f172a",
					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--rounded-badge": "1.9rem",
					"secondary": "#e5e5e5"
				}
			}
		],
	},
	theme: {
		extend: {
			fontFamily: {
				'sans': ["DM Sans Variable", "DM Sans", ...defaultTheme.fontFamily.sans],
				'heading': ["Space Grotesk Variable", "Space Grotesk", "DM Sans Variable", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
