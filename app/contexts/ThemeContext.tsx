"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	actualTheme: "light" | "dark"; // The actual theme being used (resolves 'system')
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("system");
	const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		// Load saved theme or default to system
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			setActualTheme(systemTheme);

			if (systemTheme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}

			// Listen for system theme changes
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handleChange = (e: MediaQueryListEvent) => {
				const newSystemTheme = e.matches ? "dark" : "light";
				setActualTheme(newSystemTheme);
				if (newSystemTheme === "dark") {
					root.classList.add("dark");
				} else {
					root.classList.remove("dark");
				}
			};

			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		} else {
			setActualTheme(theme as "light" | "dark");

			if (theme === "dark") {
				root.classList.add("dark");
			} else {
				root.classList.remove("dark");
			}
		}

		// Save theme preference
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
