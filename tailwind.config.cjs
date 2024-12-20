/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"sans-serif": ['Quattrocento Sans', 'ui-sans-serif'],
			"serif": ['PT Serif', 'Georgia', "Times New Roman", 'ui-serif'],
			"headings": ['Noto Sans', "ui-serif"]
		},
		container: {
			center: true
		},
		extend: {
			colors: {
				'bg-gray': "#282828",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
