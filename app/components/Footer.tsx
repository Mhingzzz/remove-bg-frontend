"use client";

import { motion } from "framer-motion";
import {
	HeartIcon,
	GlobeAltIcon,
	EnvelopeIcon,
	CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* Brand Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-4"
					>
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<CodeBracketIcon className="h-5 w-5 text-white" />
							</div>
							<h3 className="text-xl font-bold">RemoveBG AI</h3>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							Professional AI-powered background removal tool. Free, fast, and
							secure for all your image editing needs.
						</p>
						<p className="text-gray-500 text-xs leading-relaxed">
							เครื่องมือลบพื้นหลังด้วย AI ระดับมืออาชีพ ฟรี เร็ว
							และปลอดภัยสำหรับทุกความต้องการในการแต่งภาพ
						</p>
					</motion.div>

					{/* Features */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="space-y-4"
					>
						<h4 className="text-lg font-semibold">Features / คุณสมบัติ</h4>
						<ul className="space-y-2 text-sm">
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								AI Background Removal
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								High Quality Results
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Multiple Formats Support
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Mobile Optimized
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Privacy Protected
							</li>
						</ul>
					</motion.div>

					{/* Use Cases */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-4"
					>
						<h4 className="text-lg font-semibold">Use Cases / การใช้งาน</h4>
						<ul className="space-y-2 text-sm">
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								E-commerce Products
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Social Media Content
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Professional Photography
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Marketing Materials
							</li>
							<li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
								Graphic Design
							</li>
						</ul>
					</motion.div>

					{/* Keywords for SEO */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="space-y-4"
					>
						<h4 className="text-lg font-semibold">Popular Searches</h4>
						<div className="flex flex-wrap gap-2">
							{[
								"remove background",
								"ลบพื้นหลัง",
								"background remover",
								"ลบพื้นหลังภาพ",
								"transparent background",
								"พื้นหลังโปร่งใส",
								"photo editor",
								"แต่งรูป",
							].map((keyword, index) => (
								<span
									key={index}
									className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
								>
									{keyword}
								</span>
							))}
						</div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="border-t border-gray-800 pt-8"
				>
					<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
						{/* Copyright */}
						<div className="text-sm text-gray-400">
							<p>© {currentYear} RemoveBG AI. All rights reserved.</p>
							<p className="text-xs mt-1">
								Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
							</p>
						</div>

						{/* Links */}
						<div className="flex items-center space-x-6">
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								href="#"
								className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
							>
								<EnvelopeIcon className="h-4 w-4" />
								<span className="text-sm">Contact</span>
							</motion.a>

							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								href="#"
								className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
							>
								<GlobeAltIcon className="h-4 w-4" />
								<span className="text-sm">API</span>
							</motion.a>

							<motion.div
								whileHover={{ scale: 1.1 }}
								className="flex items-center space-x-1 text-gray-400"
							>
								<HeartIcon className="h-4 w-4 text-red-500" />
								<span className="text-sm">Made in Thailand</span>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* SEO Content */}
				<div className="mt-8 pt-8 border-t border-gray-800">
					<div className="text-xs text-gray-500 leading-relaxed space-y-2">
						<p>
							<strong>Free AI Background Remover:</strong> Remove backgrounds
							from images instantly with our advanced AI technology. Perfect for
							e-commerce, social media, and professional photography. No
							watermarks, no subscriptions.
						</p>
						<p>
							<strong>เครื่องมือลบพื้นหลังภาพ AI ฟรี:</strong>{" "}
							ลบพื้นหลังจากรูปภาพได้ทันทีด้วยเทคโนโลยี AI ขั้นสูงของเรา
							เหมาะสำหรับอีคอมเมิร์ซ โซเชียลมีเดีย และการถ่ายภาพระดับมืออาชีพ
							ไม่มีลายน้ำ ไม่ต้องสมัครสมาชิก
						</p>
						<p>
							Keywords: background removal, remove background, AI photo editor,
							transparent background, ลบพื้นหลัง, ลบพื้นหลังภาพ, แต่งรูป,
							พื้นหลังโปร่งใส, ตัดพื้นหลัง
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
