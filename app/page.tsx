"use client";

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
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useState } from "react";

// i18n
import { useLanguage } from "./contexts/LanguageContext";

interface ProcessingState {
	isProcessing: boolean;
	originalImage: string | null;
	processedImage: string | null;
	originalFile: File | null;
}

export default function Home() {
	const { t } = useLanguage();
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

			toast.success(t("upload.uploadSuccess"));

			// Auto-scroll to comparison section
			setTimeout(() => {
				const resultsSection = document.querySelector(".results-section");
				if (resultsSection) {
					resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}, 100);
		} catch (error) {
			console.error("Error processing image:", error);
			setState((prev) => ({
				...prev,
				isProcessing: false,
			}));

			toast.error(t("upload.uploadError"));
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
								{t("common.appName")}
							</h1>
							<p className="text-xs text-gray-600 dark:text-gray-400">
								{t("common.tagline")}
							</p>
						</div>
					</motion.div>

					<div className="flex items-center space-x-4">
						{/* <motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="hidden md:flex items-center space-x-6"
						>
							<div className="flex items-center space-x-4 text-sm">
								<div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
									<BoltIcon className="h-4 w-4" />
									<span>{t("common.fast")}</span>
								</div>
								<div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
									<ShieldCheckIcon className="h-4 w-4" />
									<span>{t("common.secure")}</span>
								</div>
								<div className="flex items-center space-x-1 text-purple-600 dark:text-purple-400">
									<SparklesIcon className="h-4 w-4" />
									<span>{t("common.free")}</span>
								</div>
							</div>
						</motion.div> */}
						<LanguageSwitcher variant="compact" />
					</div>
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
								{t("hero.title").split(" ")[0]}
							</span>
							<br />
							{t("hero.title").split(" ").slice(1).join(" ")}
						</h1>

						<div className="space-y-2">
							<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
								{t("hero.subtitle")}
							</p>
						</div>

						<div className="flex flex-wrap justify-center gap-4 text-sm">
							<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
								✓ {t("hero.features.noWatermarks")}
							</span>
							<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
								✓ {t("hero.features.highQuality")}
							</span>
							<span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
								✓ {t("hero.features.privacyProtected")}
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
							className="mt-16 results-section"
						>
							<div className="flex items-center justify-center mb-8">
								<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
									Results
								</h2>
							</div>

							<ImageComparison
								originalImage={state.originalImage!}
								processedImage={state.processedImage}
								isProcessing={state.isProcessing}
								onResetImages={resetImages}
							/>
						</motion.div>
					)}
				</div>
			</section>

			{/* Features Section */}
			<FeatureSection />

			{/* FAQ Section */}
			{/* <FAQSection /> */}

			{/* CTA Section */}
			<section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
				<div className="max-w-4xl mx-auto text-center text-white">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<h2 className="text-3xl md:text-4xl font-bold">{t("cta.title")}</h2>
						<p className="text-xl opacity-90">{t("cta.subtitle")}</p>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
						>
							{t("hero.cta")}
						</motion.button>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
