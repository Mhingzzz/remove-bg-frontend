"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { useLanguage, type LanguageCode } from "../contexts/LanguageContext";
import GoogleAdsTracking from "../utils/googleAdsTracking";

interface LanguageSwitcherProps {
	className?: string;
	variant?: "default" | "compact" | "icon-only";
	showFlag?: boolean;
}

export default function LanguageSwitcher({
	className = "",
	variant = "default",
	showFlag = true,
}: LanguageSwitcherProps) {
	const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleLanguageChange = (langCode: LanguageCode) => {
		const previousLanguage = currentLanguage;
		
		// Track language change
		GoogleAdsTracking.trackLanguageChange(previousLanguage, langCode);
		
		setLanguage(langCode);
		setIsOpen(false);
	};

	const currentLang = availableLanguages[currentLanguage];

	if (variant === "icon-only") {
		return (
			<div ref={dropdownRef} className={`relative ${className}`}>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setIsOpen(!isOpen)}
					className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors"
					aria-label="Change language"
				>
					<LanguageIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
				</motion.button>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -10, scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-lg z-50 min-w-[140px]"
						>
							{Object.entries(availableLanguages).map(([code, lang]) => (
								<motion.button
									key={code}
									whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
									onClick={() => handleLanguageChange(code as LanguageCode)}
									className={`
                    w-full px-3 py-2 text-left text-sm flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg transition-colors
                    ${
											currentLanguage === code
												? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
												: "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
										}
                  `}
								>
									<span className="text-lg">{lang.flag}</span>
									<span className="font-medium">{lang.name}</span>
								</motion.button>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		);
	}

	if (variant === "compact") {
		return (
			<div ref={dropdownRef} className={`relative ${className}`}>
				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center space-x-2 px-3 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors"
				>
					{showFlag && <span className="text-lg">{currentLang.flag}</span>}
					<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
						{currentLang.name}
					</span>
					<ChevronDownIcon
						className={`h-4 w-4 text-gray-500 transition-transform ${
							isOpen ? "rotate-180" : ""
						}`}
					/>
				</motion.button>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -10, scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-lg z-50 min-w-[140px]"
						>
							{Object.entries(availableLanguages).map(([code, lang]) => (
								<motion.button
									key={code}
									whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
									onClick={() => handleLanguageChange(code as LanguageCode)}
									className={`
                    w-full px-3 py-2 text-left text-sm flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg transition-colors
                    ${
											currentLanguage === code
												? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
												: "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
										}
                  `}
								>
									<span className="text-lg">{lang.flag}</span>
									<span className="font-medium">{lang.name}</span>
								</motion.button>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		);
	}

	// Default variant
	return (
		<div ref={dropdownRef} className={`relative ${className}`}>
			<motion.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center space-x-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
			>
				<div className="flex items-center space-x-2">
					<LanguageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
					{showFlag && <span className="text-xl">{currentLang.flag}</span>}
				</div>
				<div className="text-left">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						{currentLang.name}
					</div>
					<div className="text-xs text-gray-500 dark:text-gray-400">
						Language
					</div>
				</div>
				<ChevronDownIcon
					className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						transition={{ duration: 0.2 }}
						className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-lg z-50 min-w-[180px] overflow-hidden"
					>
						{Object.entries(availableLanguages).map(([code, lang]) => (
							<motion.button
								key={code}
								whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
								onClick={() => handleLanguageChange(code as LanguageCode)}
								className={`
                  w-full px-4 py-3 text-left flex items-center space-x-3 transition-colors
                  ${
										currentLanguage === code
											? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
											: "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
									}
                `}
							>
								<span className="text-xl">{lang.flag}</span>
								<div>
									<div className="font-medium">{lang.name}</div>
									{currentLanguage === code && (
										<div className="text-xs opacity-70">Current</div>
									)}
								</div>
								{currentLanguage === code && (
									<div className="ml-auto">
										<div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
									</div>
								)}
							</motion.button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
