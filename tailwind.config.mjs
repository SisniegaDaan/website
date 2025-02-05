/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'mark-light': '#214E8E', // Define el color personalizado
				'mark-light-active': '#0A316B',
				'mark-dark': "#557CB5"
			  },
		},
	},
	plugins: [],
}
