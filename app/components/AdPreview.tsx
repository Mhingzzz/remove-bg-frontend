// "use client";

import React from "react";

interface AdPreviewProps {
	position: string;
	dimensions: {
		width: string | number;
		height: string | number;
	};
}

export const AdPreview: React.FC<AdPreviewProps> = ({
	position,
	dimensions,
}) => {
	const getPreviewContent = () => {
		switch (position) {
			case "header":
				return (
					<div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white flex items-center justify-center rounded">
						<div className="text-center">
							<div className="text-lg font-bold">🚀 Your Ad Here</div>
							<div className="text-sm opacity-90">728×90 Leaderboard</div>
						</div>
					</div>
				);

			case "sidebar":
				return (
					<div className="w-full h-full bg-gradient-to-b from-green-500 to-teal-600 p-4 text-white flex flex-col justify-center items-center rounded">
						<div className="text-center space-y-4">
							<div className="text-xl font-bold">📱 Sidebar Ad</div>
							<div className="text-sm opacity-90">300×600 Skyscraper</div>
							<div className="bg-white/20 p-3 rounded text-center">
								<div className="text-xs">High visibility</div>
								<div className="text-xs">Sticky position</div>
							</div>
						</div>
					</div>
				);

			case "content":
				return (
					<div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white flex items-center justify-center rounded">
						<div className="text-center">
							<div className="text-xl font-bold">🎯 Content Ad</div>
							<div className="text-sm opacity-90">
								300×250 Rectangle - Best Performance
							</div>
						</div>
					</div>
				);

			case "footer":
				return (
					<div className="w-full h-full bg-gradient-to-r from-indigo-500 to-blue-600 p-4 text-white flex items-center justify-center rounded">
						<div className="text-center">
							<div className="text-lg font-bold">🔚 Footer Ad</div>
							<div className="text-sm opacity-90">728×90 Leaderboard</div>
						</div>
					</div>
				);

			case "mobile-banner":
				return (
					<div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 p-2 text-white flex items-center justify-center rounded">
						<div className="text-center">
							<div className="text-sm font-bold">📱 Mobile Banner</div>
							<div className="text-xs opacity-90">320×50</div>
						</div>
					</div>
				);

			default:
				return (
					<div className="w-full h-full bg-gray-500 p-4 text-white flex items-center justify-center rounded">
						<div className="text-center">
							<div className="font-bold">Ad Placeholder</div>
							<div className="text-sm">
								{dimensions.width} × {dimensions.height}
							</div>
						</div>
					</div>
				);
		}
	};

	return (
		<div className="relative">
			<div className="absolute top-0 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded-bl z-10">
				Preview
			</div>
			{getPreviewContent()}
		</div>
	);
};
