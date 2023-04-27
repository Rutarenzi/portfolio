/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx, ts, tsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				titleFont: ['Montserrat', 'sans-serif'],
			},
			colors: {
				bodyColor: '#000',
				lightText: '#c4cfde',
				boxBg: 'linear-gradient(145deg, #1e2024,#23272b)',
				designColor: 'rgb(4, 194, 201);',
				borderColor: 'rgba(4, 194, 201,0.3);',
			},
			boxShadow: {
				shadowOne: '10px 10px 10px #018d91, 20px 20px rgba(4, 194, 201,0.4)',
				shadowTwo: '10px 10px 10px rgba(4, 194, 201,0.3), 20px 20px #000',
			},
		},
	},
	plugins: [],
};
