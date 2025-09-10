"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
	{
		question: "How accurate is the AI background removal?",
		questionTh: "ความแม่นยำของการลบพื้นหลังด้วย AI เป็นอย่างไร?",
		answer:
			"Our AI achieves 95%+ accuracy with advanced edge detection algorithms. It works best with clear subject-background contrast and handles complex elements like hair, fur, and transparent objects.",
		answerTh:
			"AI ของเรามีความแม่นยำ 95%+ ด้วยอัลกอริทึมการตรวจจับขอบขั้นสูง ทำงานได้ดีที่สุดกับภาพที่มีความแตกต่างชัดเจนระหว่างวัตถุและพื้นหลัง และจัดการกับองค์ประกอบที่ซับซ้อนเช่น เส้นผม ขนสัตว์ และวัตถุโปร่งใส",
	},
	{
		question: "What image formats are supported?",
		questionTh: "รองรับรูปแบบไฟล์ภาพอะไรบ้าง?",
		answer:
			"We support JPG, JPEG, PNG, WebP, BMP, and GIF formats. The output is always in PNG format with transparent background for maximum compatibility.",
		answerTh:
			"เรารองรับรูปแบบ JPG, JPEG, PNG, WebP, BMP และ GIF ผลลัพธ์จะเป็นรูปแบบ PNG พร้อมพื้นหลังโปร่งใสเสมอเพื่อความเข้ากันได้สูงสุด",
	},
	{
		question: "Is there a file size limit?",
		questionTh: "มีข้อจำกัดขนาดไฟล์หรือไม่?",
		answer:
			"Yes, the maximum file size is 10MB per image. For best results, we recommend images with at least 500x500 pixels resolution.",
		answerTh:
			"ใช่ ขนาดไฟล์สูงสุดคือ 10MB ต่อภาพ เพื่อผลลัพธ์ที่ดีที่สุด เราแนะนำให้ใช้ภาพที่มีความละเอียดอย่างน้อย 500x500 พิกเซล",
	},
	{
		question: "How long does processing take?",
		questionTh: "การประมวลผลใช้เวลานานแค่ไหน?",
		answer:
			"Most images are processed within 3-10 seconds, depending on image complexity and server load. Complex images with intricate details may take slightly longer.",
		answerTh:
			"ภาพส่วนใหญ่จะได้รับการประมวลผลภายใน 3-10 วินาทีขึ้นอยู่กับความซับซ้อนของภาพและโหลดเซิร์ฟเวอร์ ภาพที่ซับซ้อนพร้อมรายละเอียดที่ประณีตอาจใช้เวลานานขึ้นเล็กน้อย",
	},
	{
		question: "Are my images stored on your servers?",
		questionTh: "ภาพของฉันถูกเก็บไว้ในเซิร์ฟเวอร์ของคุณหรือไม่?",
		answer:
			"No, we prioritize your privacy. Images are processed in real-time and automatically deleted from our servers immediately after processing. We never store or access your images.",
		answerTh:
			"ไม่ เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ ภาพจะได้รับการประมวลผลแบบเรียลไทม์และลบออกจากเซิร์ฟเวอร์ของเราโดยอัตโนมัติทันทีหลังการประมวลผล เราไม่เก็บหรือเข้าถึงภาพของคุณ",
	},
	{
		question: "Can I use this for commercial purposes?",
		questionTh: "ฉันสามารถใช้เพื่อวัตถุประสงค์เชิงพาณิชย์ได้หรือไม่?",
		answer:
			"Yes, absolutely! Our service is free for both personal and commercial use. Perfect for e-commerce, marketing materials, and professional photography.",
		answerTh:
			"ได้แน่นอน! บริการของเราฟรีสำหรับการใช้งานส่วนบุคคลและเชิงพาณิชย์ เหมาะสำหรับอีคอมเมิร์ซ สื่อการตลาด และการถ่ายภาพระดับมืออาชีพ",
	},
	{
		question: "What if the result isn't perfect?",
		questionTh: "จะทำอย่างไรถ้าผลลัพธ์ไม่สมบูรณ์แบบ?",
		answer:
			"While our AI is highly accurate, results may vary based on image quality and complexity. For best results, use high-contrast images with clear subject separation from the background.",
		answerTh:
			"แม้ว่า AI ของเรามีความแม่นยำสูง แต่ผลลัพธ์อาจแตกต่างกันขึ้นอยู่กับคุณภาพและความซับซ้อนของภาพ เพื่อผลลัพธ์ที่ดีที่สุด ให้ใช้ภาพที่มีความคมชัดสูงและแยกวัตถุออกจากพื้นหลังได้ชัดเจน",
	},
	{
		question: "Is this service really free?",
		questionTh: "บริการนี้ฟรีจริงหรือไม่?",
		answer:
			"Yes, completely free with no hidden costs, watermarks, or subscription fees. We believe in providing accessible AI tools for everyone.",
		answerTh:
			"ใช่ ฟรีโดยสมบูรณ์ไม่มีค่าใช้จ่ายซ่อน ลายน้ำ หรือค่าสมัครสมาชิก เราเชื่อในการให้บริการเครื่องมือ AI ที่เข้าถึงได้สำหรับทุกคน",
	},
];

export default function FAQSection() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	return (
		<section className="py-16 px-4 bg-white dark:bg-gray-900">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						คำถามที่พบบ่อย
					</p>
				</motion.div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
						>
							<motion.button
								onClick={() => toggleItem(index)}
								className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
								whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
							>
								<div className="space-y-1">
									<h3 className="font-semibold text-gray-900 dark:text-white">
										{faq.question}
									</h3>
									<p className="text-sm text-blue-600 dark:text-blue-400">
										{faq.questionTh}
									</p>
								</div>
								<motion.div
									animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
									transition={{ duration: 0.2 }}
								>
									<ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
								</motion.div>
							</motion.button>

							<motion.div
								initial={false}
								animate={{
									height: openItems.includes(index) ? "auto" : 0,
									opacity: openItems.includes(index) ? 1 : 0,
								}}
								transition={{ duration: 0.3 }}
								className="overflow-hidden"
							>
								<div className="px-6 pb-4 space-y-2">
									<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
										{faq.answer}
									</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
										{faq.answerTh}
									</p>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="text-center mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
				>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Still have questions? / ยังมีคำถาม?
					</h3>
					<p className="text-gray-600 dark:text-gray-400 mb-4">
						Feel free to reach out to us for any additional support or
						inquiries.
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-500">
						รู้สึกอิสระที่จะติดต่อเราสำหรับการสนับสนุนเพิ่มเติมหรือข้อสอบถาม
					</p>
				</motion.div>
			</div>
		</section>
	);
}
