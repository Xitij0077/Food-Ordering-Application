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
				// olive: "#FF5403",
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
