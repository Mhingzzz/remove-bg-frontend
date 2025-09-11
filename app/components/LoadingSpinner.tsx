// "use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	text?: string;
	textTh?: string;
}

export default function LoadingSpinner({
	size = "md",
	text = "Processing...",
	textTh = "กำลังประมวลผล...",
}: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: "h-4 w-4",
		md: "h-8 w-8",
		lg: "h-12 w-12",
	};

	const textSizeClasses = {
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
	};

	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<motion.div
				className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full`}
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>

			<div className={`text-center ${textSizeClasses[size]}`}>
				<p className="text-gray-700 dark:text-gray-300 font-medium">{text}</p>
				<p className="text-gray-500 dark:text-gray-500 text-sm">{textTh}</p>
			</div>

			{/* Animated dots */}
			<div className="flex space-x-1">
				{[0, 1, 2].map((i) => (
					<motion.div
						key={i}
						className="w-2 h-2 bg-blue-600 rounded-full"
						animate={{ y: [0, -10, 0] }}
						transition={{
							duration: 0.8,
							repeat: Infinity,
							delay: i * 0.2,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>
		</div>
	);
}
