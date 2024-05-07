/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			colors: {
				'bg-black-1': '#09090B',
				'button-color': '#222224',
				'white': '#FFFFFF',
			},
		},
	},
	plugins: []
}