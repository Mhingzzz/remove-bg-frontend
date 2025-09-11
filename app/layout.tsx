import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StructuredData from "./components/StructuredData";
import GoogleAds from "./components/GoogleAds";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title:
		"RemoveBG AI - Remove Background from Images Free Unlimited | ลบพื้นหลังภาพ AI ฟรีไม่จำกัด",
	description:
		"Professional AI-powered background removal tool. Remove backgrounds from images instantly with high quality results. Free online background remover unlimited. | เครื่องมือลบพื้นหลังภาพด้วย AI ที่มีคุณภาพสูง ลบพื้นหลังได้ทันที ฟรีไม่จำกัด",
	keywords:
		"background remover, remove background, AI background removal, photo editor, image editing, transparent background, ลบพื้นหลัง, ลบพื้นหลังภาพ, แต่งรูป, ตัดพื้นหลัง , free background remover , ลบภาพพื้นหลังฟรีไม่จำกัด",
	openGraph: {
		title: "AI Background Remover - Professional Photo Editing Tool",
		description:
			"Remove backgrounds from images instantly with our AI-powered tool. High quality, fast, and free.",
		type: "website",
		locale: "en_US",
		alternateLocale: ["th_TH"],
	},
	twitter: {
		card: "summary_large_image",
		title: "AI Background Remover",
		description: "Professional AI-powered background removal tool",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="alternate" hrefLang="en" href="/" />
				<link rel="alternate" hrefLang="th" href="/th" />
				<link rel="canonical" href="/" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="theme-color" content="#F75270" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-background to-secondary min-h-screen transition-colors duration-300`}
			>
				<GoogleAds />
				<ThemeProvider>
					<LanguageProvider>
						<StructuredData />
						{children}
						<Toaster
							position="top-right"
							toastOptions={{
								duration: 4000,
								style: {
									background: "white",
									color: "#333",
									border: "1px solid #e5e7eb",
									borderRadius: "8px",
									fontSize: "14px",
									fontWeight: "500",
								},
								success: {
									style: {
										background: "#f0fdf4",
										color: "#166534",
										border: "1px solid #22c55e",
									},
								},
								error: {
									style: {
										background: "#fef2f2",
										color: "#991b1b",
										border: "1px solid #ef4444",
									},
								},
							}}
						/>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
