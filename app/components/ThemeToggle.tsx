"use client";

import { motion } from "framer-motion";
import {
	SunIcon,
	MoonIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";

export default function ThemeToggle() {
	const { theme, setTheme, actualTheme } = useTheme();
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

	const themes = [
		{ key: "light", name: "Light", icon: SunIcon },
		{ key: "dark", name: "Dark", icon: MoonIcon },
		{ key: "system", name: "System", icon: ComputerDesktopIcon },
	] as const;

	const currentTheme = themes.find((t) => t.key === theme);
	const CurrentIcon = currentTheme?.icon || SunIcon;

	return (
		<div ref={dropdownRef} className="relative">
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className="p-2 rounded-lg bg-background/80 backdrop-blur-lg border border-secondary hover:bg-background transition-colors"
				aria-label="Toggle theme"
			>
				<CurrentIcon className="h-5 w-5 text-foreground" />
			</motion.button>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: -10, scale: 0.95 }}
					transition={{ duration: 0.2 }}
					className="absolute top-full right-0 mt-2 bg-background border border-secondary backdrop-blur-lg rounded-lg shadow-lg z-50 min-w-[120px]"
				>
					{themes.map(({ key, name, icon: Icon }) => (
						<motion.button
							key={key}
							whileHover={{ backgroundColor: "rgba(161, 194, 189, 0.2)" }}
							onClick={() => {
								setTheme(key);
								setIsOpen(false);
							}}
							className={`
                w-full px-3 py-2 text-left text-sm flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg transition-colors
                ${
									theme === key
										? "bg-secondary text-primary font-medium"
										: "text-foreground hover:bg-secondary/50"
								}
              `}
						>
							<Icon className="h-4 w-4" />
							<span>{name}</span>
							{key === "system" && (
								<span className="text-xs opacity-70">({actualTheme})</span>
							)}
						</motion.button>
					))}
				</motion.div>
			)}
		</div>
	);
}
