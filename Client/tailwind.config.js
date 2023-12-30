/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				orange: "#FF5403",
				tomato: "#FF6868",
				secondary: "#555",
				primaryBG: "#fcfcfc",
				green: "#39DB4A",
				pink: "#FA7070",
				coral: "#dbaa39",
				blue: "#a9cfc3",
			},

			fontFamily: {
				inter: ["Inter", "sans-serif"],
				lora: ["Lora", "serif"],
				quicksand: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
