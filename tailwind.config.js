/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Your custom color palette
				brand: {
					dark: "#19183B", // Primary dark navy
					teal: "#708993", // Secondary teal
					"light-teal": "#A1C2BD", // Tertiary light teal
					mint: "#E7F2EF", // Light mint background
				},
				// CSS Variables for dynamic theming
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
				mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
			},
			backgroundImage: {
				"gradient-brand": "linear-gradient(135deg, #E7F2EF 0%, #A1C2BD 100%)",
				"gradient-brand-dark":
					"linear-gradient(135deg, #19183B 0%, #708993 100%)",
			},
		},
	},
	plugins: [],
	darkMode: "class", // Use class-based dark mode
};
