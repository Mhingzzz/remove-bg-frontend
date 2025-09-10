"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Import translation files
import enTranslations from "../locales/en.json";
import thTranslations from "../locales/th.json";
// import esTranslations from "../locales/es.json";

// Define available languages
export const LANGUAGES = {
	en: { name: "English", flag: "🇺🇸", translations: enTranslations },
	th: { name: "ไทย", flag: "🇹🇭", translations: thTranslations },
	// es: { name: "Español", flag: "🇪🇸", translations: esTranslations },
} as const;

export type LanguageCode = keyof typeof LANGUAGES;

// Context type
interface LanguageContextType {
	currentLanguage: LanguageCode;
	setLanguage: (language: LanguageCode) => void;
	t: (key: string) => string;
	availableLanguages: typeof LANGUAGES;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

// Provider component
interface LanguageProviderProps {
	children: React.ReactNode;
	defaultLanguage?: LanguageCode;
}

export function LanguageProvider({
	children,
	defaultLanguage = "en",
}: LanguageProviderProps) {
	const [currentLanguage, setCurrentLanguage] =
		useState<LanguageCode>(defaultLanguage);

	// Load language from localStorage on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedLanguage = localStorage.getItem("language") as LanguageCode;
			if (savedLanguage && LANGUAGES[savedLanguage]) {
				setCurrentLanguage(savedLanguage);
			} else {
				// Try to detect browser language
				const browserLanguage = navigator.language.toLowerCase();
				if (browserLanguage.startsWith("th")) {
					setCurrentLanguage("th");
				} else if (browserLanguage.startsWith("es")) {
					// setCurrentLanguage("es");
				} else {
					setCurrentLanguage("en");
				}
			}
		}
	}, []);

	// Save language to localStorage
	const setLanguage = (language: LanguageCode) => {
		setCurrentLanguage(language);
		if (typeof window !== "undefined") {
			localStorage.setItem("language", language);
		}
	};

	// Translation function
	const t = (key: string): string => {
		const translations = LANGUAGES[currentLanguage].translations;
		const keys = key.split(".");

		let value: any = translations;
		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				// Fallback to English if key not found
				const enTranslations = LANGUAGES.en.translations;
				let fallbackValue: any = enTranslations;
				for (const fallbackK of keys) {
					if (
						fallbackValue &&
						typeof fallbackValue === "object" &&
						fallbackK in fallbackValue
					) {
						fallbackValue = fallbackValue[fallbackK];
					} else {
						return key; // Return key if not found in fallback
					}
				}
				return typeof fallbackValue === "string" ? fallbackValue : key;
			}
		}

		return typeof value === "string" ? value : key;
	};

	const value: LanguageContextType = {
		currentLanguage,
		setLanguage,
		t,
		availableLanguages: LANGUAGES,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

// Hook to use language context
export function useLanguage(): LanguageContextType {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}

// Utility function to get nested object values
export function getNestedValue(obj: any, path: string): any {
	return path.split(".").reduce((current, key) => current?.[key], obj);
}
