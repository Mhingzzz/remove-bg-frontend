"use client";

import { motion } from "framer-motion";
import {
	SparklesIcon,
	BoltIcon,
	ShieldCheckIcon,
	DevicePhoneMobileIcon,
	GlobeAltIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		icon: SparklesIcon,
		title: "AI-Powered Precision",
		titleTh: "ความแม่นยำด้วย AI",
		description:
			"Advanced AI algorithms ensure perfect background removal with natural edge detection.",
		descriptionTh:
			"อัลกอริทึม AI ขั้นสูงรับประกันการลบพื้นหลังที่สมบูรณ์แบบพร้อมการตรวจจับขอบที่เป็นธรรมชาติ",
	},
	{
		icon: BoltIcon,
		title: "Lightning Fast",
		titleTh: "เร็วเหมือนสายฟ้า",
		description:
			"Process your images in seconds with our optimized cloud infrastructure.",
		descriptionTh:
			"ประมวลผลรูปภาพของคุณในไม่กี่วินาทีด้วยโครงสร้างคลาวด์ที่ปรับปรุงแล้ว",
	},
	{
		icon: ShieldCheckIcon,
		title: "Privacy Protected",
		titleTh: "ปกป้องความเป็นส่วนตัว",
		description:
			"Your images are processed securely and deleted immediately after processing.",
		descriptionTh:
			"รูปภาพของคุณได้รับการประมวลผลอย่างปลอดภัยและลบทิ้งทันทีหลังการประมวลผล",
	},
	{
		icon: DevicePhoneMobileIcon,
		title: "Mobile Optimized",
		titleTh: "เพิ่มประสิทธิภาพสำหรับมือถือ",
		description:
			"Perfect experience on all devices - desktop, tablet, and mobile.",
		descriptionTh:
			"ประสบการณ์ที่สมบูรณ์แบบบนทุกอุปกรณ์ - เดสก์ท็อป แท็บเล็ต และมือถือ",
	},
	{
		icon: GlobeAltIcon,
		title: "Multiple Formats",
		titleTh: "รองรับหลายรูปแบบ",
		description: "Support for JPG, PNG, WebP, and more image formats.",
		descriptionTh: "รองรับรูปแบบไฟล์ JPG, PNG, WebP และอื่นๆ อีกมากมาย",
	},
	{
		icon: HeartIcon,
		title: "Completely Free",
		titleTh: "ฟรีโดยสมบูรณ์",
		description:
			"No watermarks, no subscriptions, no hidden fees. Forever free.",
		descriptionTh:
			"ไม่มีลายน้ำ ไม่มีการสมัครสมาชิก ไม่มีค่าธรรมเนียมซ่อน ฟรีตลอดไป",
	},
];

export default function FeatureSection() {
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
					<p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
						ทำไมต้องเลือกเครื่องมือลบพื้นหลังของเรา?
					</p>
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
							<p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
								{feature.titleTh}
							</p>
							<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
								{feature.description}
							</p>
							<p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">
								{feature.descriptionTh}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
