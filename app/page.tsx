"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	SparklesIcon,
	BoltIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

// Components
import ImageUploader from "./components/ImageUploader";
import ImageComparison from "./components/ImageComparison";
import FeatureSection from "./components/FeatureSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

interface ProcessingState {
	isProcessing: boolean;
	originalImage: string | null;
	processedImage: string | null;
	originalFile: File | null;
}

export default function Home() {
	const [state, setState] = useState<ProcessingState>({
		isProcessing: false,
		originalImage: null,
		processedImage: null,
		originalFile: null,
	});

	const handleImageUpload = async (file: File, preview: string) => {
		setState((prev) => ({
			...prev,
			isProcessing: true,
			originalImage: preview,
			originalFile: file,
			processedImage: null,
		}));

		try {
			const formData = new FormData();
			formData.append("file", file);

			const response = await fetch("http://localhost:8000/remove-bg", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const blob = await response.blob();
			const processedUrl = URL.createObjectURL(blob);

			setState((prev) => ({
				...prev,
				processedImage: processedUrl,
				isProcessing: false,
			}));

			toast.success("Background removed successfully! / ลบพื้นหลังสำเร็จแล้ว!");
		} catch (error) {
			console.error("Error processing image:", error);
			setState((prev) => ({
				...prev,
				isProcessing: false,
			}));

			toast.error(
				"Failed to process image. Please try again. / ไม่สามารถประมวลผลภาพได้ กรุณาลองใหม่อีกครั้ง"
			);
		}
	};

	const resetImages = () => {
		setState({
			isProcessing: false,
			originalImage: null,
			processedImage: null,
			originalFile: null,
		});
	};

	return (
		<div className="min-h-screen">
			{/* Header */}
			<header className="py-6 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
				<div className="max-w-6xl mx-auto flex items-center justify-between">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="flex items-center space-x-2"
					>
						<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
							<SparklesIcon className="h-6 w-6 text-white" />
						</div>
						<div>
							<h1 className="text-xl font-bold text-gray-900 dark:text-white">
								RemoveBG AI
							</h1>
							<p className="text-xs text-gray-600 dark:text-gray-400">
								Professional Background Remover
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="hidden md:flex items-center space-x-6"
					>
						<div className="flex items-center space-x-4 text-sm">
							<div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
								<BoltIcon className="h-4 w-4" />
								<span>Fast AI</span>
							</div>
							<div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
								<ShieldCheckIcon className="h-4 w-4" />
								<span>Secure</span>
							</div>
							<div className="flex items-center space-x-1 text-purple-600 dark:text-purple-400">
								<SparklesIcon className="h-4 w-4" />
								<span>Free</span>
							</div>
						</div>
					</motion.div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-6 mb-12"
					>
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								AI-Powered
							</span>
							<br />
							Background Remover
						</h1>

						<div className="space-y-2">
							<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
								Remove backgrounds from images instantly with cutting-edge AI
								technology. Professional quality results in seconds, completely
								free.
							</p>
							<p className="text-lg text-gray-500 dark:text-gray-500 max-w-3xl mx-auto">
								ลบพื้นหลังจากรูปภาพได้ทันทีด้วยเทคโนโลยี AI ล้ำสมัย
								ผลลัพธ์คุณภาพระดับมืออาชีพในไม่กี่วินาทีโดยไม่เสียค่าใช้จ่าย
							</p>
						</div>

						<div className="flex flex-wrap justify-center gap-4 text-sm">
							<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
								✓ No Watermarks / ไม่มีลายน้ำ
							</span>
							<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
								✓ High Quality / คุณภาพสูง
							</span>
							<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
								✓ Privacy Protected / ปกป้องความเป็นส่วนตัว
							</span>
						</div>
					</motion.div>

					{/* Upload Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<ImageUploader
							onImageUpload={handleImageUpload}
							isProcessing={state.isProcessing}
						/>
					</motion.div>

					{/* Results Section */}
					{(state.originalImage || state.processedImage) && (
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="mt-16"
						>
							<div className="flex items-center justify-between mb-8">
								<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
									Results / ผลลัพธ์
								</h2>
								{!state.isProcessing && (
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={resetImages}
										className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
									>
										Upload New Image / อัปโหลดภาพใหม่
									</motion.button>
								)}
							</div>

							<ImageComparison
								originalImage={state.originalImage!}
								processedImage={state.processedImage}
								isProcessing={state.isProcessing}
							/>
						</motion.div>
					)}
				</div>
			</section>

			{/* Features Section */}
			<FeatureSection />

			{/* FAQ Section */}
			<FAQSection />

			{/* CTA Section */}
			<section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
				<div className="max-w-4xl mx-auto text-center text-white">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<h2 className="text-3xl md:text-4xl font-bold">
							Ready to Remove Backgrounds?
						</h2>
						<p className="text-xl opacity-90">
							Join thousands of users who trust our AI-powered background
							removal tool.
						</p>
						<p className="text-lg opacity-80">
							เข้าร่วมกับผู้ใช้งานหลายพันคนที่เชื่อมั่นในเครื่องมือลบพื้นหลังด้วย
							AI ของเรา
						</p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
						>
							Start Removing Backgrounds / เริ่มลบพื้นหลัง
						</motion.button>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
