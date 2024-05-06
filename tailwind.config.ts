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
				'online-color': '#36A55F',
				'offline-color': '#80848E',
				'idle-color': '#EFB040',
				'dnd-color': '#ED3743',
				'white': '#FFFFFF',
			},
		},
	},
	plugins: []
}