"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
	ArrowDownTrayIcon,
	ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import html2canvas from "html2canvas";
import toast from "react-hot-toast";

interface ImageComparisonProps {
	originalImage: string;
	processedImage: string | null;
	isProcessing: boolean;
}

export default function ImageComparison({
	originalImage,
	processedImage,
	isProcessing,
}: ImageComparisonProps) {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const [showComparison, setShowComparison] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const comparisonRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = (x / rect.width) * 100;
		setSliderPosition(Math.max(0, Math.min(100, percentage)));
	};

	const downloadImage = async (url: string, filename: string) => {
		try {
			const response = await fetch(url);
			const blob = await response.blob();
			const downloadUrl = URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = downloadUrl;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(downloadUrl);

			toast.success("Download started! / เริ่มดาวน์โหลดแล้ว!");
		} catch (error) {
			toast.error("Download failed / ดาวน์โหลดล้มเหลว");
		}
	};

	const downloadComparison = async () => {
		if (!comparisonRef.current) return;

		try {
			const canvas = await html2canvas(comparisonRef.current, {
				allowTaint: true,
				useCORS: true,
				scale: 2,
			});

			const link = document.createElement("a");
			link.download = "background-removal-comparison.png";
			link.href = canvas.toDataURL();
			link.click();

			toast.success("Comparison downloaded! / ดาวน์โหลดการเปรียบเทียบแล้ว!");
		} catch (error) {
			toast.error(
				"Failed to download comparison / ไม่สามารถดาวน์โหลดการเปรียบเทียบได้"
			);
		}
	};

	if (!originalImage) return null;

	return (
		<div className="w-full max-w-4xl mx-auto space-y-6">
			{/* Toggle Button */}
			<div className="flex justify-center">
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setShowComparison(!showComparison)}
					className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
            ${
							showComparison
								? "bg-blue-600 text-white hover:bg-blue-700"
								: "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
						}
          `}
					disabled={!processedImage || isProcessing}
				>
					<ArrowsRightLeftIcon className="h-5 w-5" />
					<span>
						{showComparison ? "Hide Comparison" : "Show Comparison"}
						{showComparison ? " / ซ่อนการเปรียบเทียบ" : " / แสดงการเปรียบเทียบ"}
					</span>
				</motion.button>
			</div>

			{/* Images Display */}
			<div ref={comparisonRef} className="grid gap-6">
				{showComparison && processedImage ? (
					// Side by side comparison
					<div className="grid md:grid-cols-2 gap-6">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="space-y-3"
						>
							<h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
								Original / ต้นฉบับ
							</h3>
							<div className="relative group">
								<img
									src={originalImage}
									alt="Original"
									className="w-full rounded-lg shadow-lg"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={() =>
										downloadImage(originalImage, "original-image.png")
									}
									className="absolute bottom-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
								>
									<ArrowDownTrayIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
								</motion.button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="space-y-3"
						>
							<h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
								Background Removed / ลบพื้นหลังแล้ว
							</h3>
							<div className="relative group">
								<div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4">
									<img
										src={processedImage}
										alt="Processed"
										className="w-full rounded-lg shadow-lg"
										style={{
											background:
												"repeating-conic-gradient(#f0f0f0 0% 25%, transparent 0% 50%) 50% / 20px 20px",
										}}
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={() =>
										downloadImage(processedImage, "background-removed.png")
									}
									className="absolute bottom-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
								>
									<ArrowDownTrayIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
								</motion.button>
							</div>
						</motion.div>
					</div>
				) : (
					// Interactive slider comparison
					processedImage && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="space-y-4"
						>
							<h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
								Interactive Comparison / เปรียบเทียบแบบโต้ตอบ
							</h3>

							<div
								ref={containerRef}
								className="relative overflow-hidden rounded-lg shadow-lg cursor-col-resize select-none"
								onMouseMove={handleMouseMove}
								onMouseUp={handleMouseUp}
								onMouseLeave={handleMouseUp}
							>
								{/* Background image (processed) */}
								<div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4">
									<img
										src={processedImage}
										alt="Processed"
										className="w-full h-auto"
										style={{
											background:
												"repeating-conic-gradient(#f0f0f0 0% 25%, transparent 0% 50%) 50% / 20px 20px",
										}}
									/>
								</div>

								{/* Overlay image (original) */}
								<div
									className="absolute top-0 left-0 h-full overflow-hidden"
									style={{ width: `${sliderPosition}%` }}
								>
									<img
										src={originalImage}
										alt="Original"
										className="h-full w-auto object-cover"
										style={{
											width: `${
												(100 * (containerRef.current?.offsetWidth || 1)) /
												(containerRef.current?.offsetWidth || 1)
											}%`,
										}}
									/>
								</div>

								{/* Slider line */}
								<div
									className="absolute top-0 h-full w-1 bg-white shadow-lg cursor-col-resize z-10"
									style={{ left: `${sliderPosition}%` }}
									onMouseDown={handleMouseDown}
								>
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
										<ArrowsRightLeftIcon className="h-4 w-4 text-gray-600" />
									</div>
								</div>

								{/* Labels */}
								<div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
									Original / ต้นฉบับ
								</div>
								<div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
									Processed / ประมวลผลแล้ว
								</div>
							</div>

							<p className="text-center text-sm text-gray-600 dark:text-gray-400">
								Drag the slider to compare / ลากเส้นเลื่อนเพื่อเปรียบเทียบ
							</p>
						</motion.div>
					)
				)}
			</div>

			{/* Download Buttons */}
			{processedImage && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="flex flex-wrap justify-center gap-4"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() =>
							downloadImage(processedImage, "background-removed.png")
						}
						className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
					>
						<ArrowDownTrayIcon className="h-5 w-5" />
						<span>Download Result / ดาวน์โหลดผลลัพธ์</span>
					</motion.button>
				</motion.div>
			)}
		</div>
	);
}
