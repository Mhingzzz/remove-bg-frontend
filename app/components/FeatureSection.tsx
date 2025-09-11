// "use client";

import { motion } from "framer-motion";
import {
	SparklesIcon,
	BoltIcon,
	ShieldCheckIcon,
	DevicePhoneMobileIcon,
	GlobeAltIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function FeatureSection() {
	const { t } = useLanguage();

	const features = [
		{
			icon: SparklesIcon,
			title: `${t("features.items.aiPowered.title")}`,
			description: `${t("features.items.aiPowered.description")}`,
		},
		{
			icon: BoltIcon,
			title: `${t("features.items.lightningFast.title")}`,
			description: `${t("features.items.lightningFast.description")}`,
		},
		{
			icon: ShieldCheckIcon,
			title: `${t("features.items.privacyProtected.title")}`,
			description: `${t("features.items.privacyProtected.description")}`,
		},
		{
			icon: DevicePhoneMobileIcon,
			title: `${t("features.items.mobileOptimized.title")}`,
			description: `${t("features.items.mobileOptimized.description")}`,
		},
		{
			icon: GlobeAltIcon,
			title: `${t("features.items.multipleFormats.title")}`,
			description: `${t("features.items.multipleFormats.description")}`,
		},
		{
			icon: HeartIcon,
			title: `${t("features.items.completelyFree.title")}`,
			description: `${t("features.items.completelyFree.description")}`,
		},
	];
	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Why Choose Our Background Remover?
					</h2>

					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Professional-grade background removal powered by cutting-edge AI
						technology. Perfect for e-commerce, social media, and creative
						projects.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
						>
							<div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
								<feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
