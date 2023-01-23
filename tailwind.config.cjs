/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				pink: '#DE5d83',
				'theme-black': '#101116',
				white: '#FFFFFF',
				gray: '#BEBEBE',
				'gray-light': '#D9D9D9'
			}
		}
	},
	plugins: []
};
