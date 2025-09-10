"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface AdDebuggerProps {
	children: React.ReactNode;
	position: string;
	dimensions: {
		width: string | number;
		height: string | number;
	};
}

export const AdDebugger: React.FC<AdDebuggerProps> = ({
	children,
	position,
	dimensions,
}) => {
	const [showDebug, setShowDebug] = useState(true);

	if (!showDebug) {
		return <>{children}</>;
	}

	return (
		<div className="relative">
			{/* Debug Info Overlay */}
			<div className="absolute -top-8 left-0 right-0 z-50 bg-red-500 text-white text-xs px-2 py-1 rounded-t flex items-center justify-between">
				<span>
					📍 {position.toUpperCase()} AD - {dimensions.width} ×{" "}
					{dimensions.height}
				</span>
				<button
					onClick={() => setShowDebug(false)}
					className="ml-2 hover:bg-red-600 rounded p-1"
				>
					<EyeSlashIcon className="w-3 h-3" />
				</button>
			</div>

			{/* Debug Border */}
			<div className="border-2 border-dashed border-red-500 bg-red-50/20 relative">
				{children}

				{/* Corner markers */}
				<div className="absolute top-0 left-0 w-2 h-2 bg-red-500"></div>
				<div className="absolute top-0 right-0 w-2 h-2 bg-red-500"></div>
				<div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500"></div>
				<div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500"></div>
			</div>
		</div>
	);
};

// Global debug toggle component
export const AdDebugToggle: React.FC = () => {
	const [debugMode, setDebugMode] = useState(false);

	return (
		<div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-2 rounded-lg">
			<button
				onClick={() => setDebugMode(!debugMode)}
				className="flex items-center space-x-2 text-sm"
			>
				{debugMode ? (
					<EyeSlashIcon className="w-4 h-4" />
				) : (
					<EyeIcon className="w-4 h-4" />
				)}
				<span>{debugMode ? "Hide" : "Show"} Ad Debug</span>
			</button>
		</div>
	);
};
