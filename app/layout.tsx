import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StructuredData from "./components/StructuredData";
import GoogleAds from "./components/GoogleAds";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";
import Script from "next/script";
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
		"RemoveBG AI - Free Unlimited AI Background Remover | ลบพื้นหลังภาพฟรีไม่จำกัด",
	description:
		"RemoveBG AI is a professional AI-powered background removal tool. Remove backgrounds from images instantly with high-quality results. Free online unlimited background remover | เครื่องมือตัดพื้นหลังภาพด้วย AI คุณภาพสูง ใช้งานฟรีไม่จำกัด.",
	keywords: [
		"background remover",
		"remove background",
		"AI background removal",
		"photo editor",
		"image editing",
		"transparent background",
		"ลบพื้นหลัง",
		"ลบพื้นหลังภาพ",
		"แต่งรูป",
		"ตัดพื้นหลัง",
		"free background remover",
		"ลบภาพพื้นหลังฟรีไม่จำกัด",
		"ลบภาพพื้นหลัง",
		"ลบภาพพื้นหลังฟรี",
		"ตัดฉากหลัง",
	],
	openGraph: {
		title: "AI Background Remover - Free & Professional Online Tool",
		description:
			"Remove image backgrounds instantly with AI. Free unlimited background remover online. High quality, fast, and easy-to-use tool.",
		url: "https://removebg-ai.usefulapps.app",
		siteName: "RemoveBG AI",
		type: "website",
		locale: "en_US",
		alternateLocale: ["th_TH"],
		images: [
			{
				url: "https://removebg-ai.usefulapps.app/og-image.png", // Replace with your OG image
				width: 1200,
				height: 630,
				alt: "RemoveBG AI - Free Unlimited Background Remover",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "RemoveBG AI - Free Unlimited Background Remover",
		description:
			"Remove backgrounds from images instantly with our AI-powered tool. Free, fast, and high-quality background remover.",
		images: ["https://removebg-ai.usefulapps.app/twitter-card.png"], // Replace with your Twitter card image
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
	alternates: {
		canonical: "https://removebg-ai.usefulapps.app",
		languages: {
			"en-US": "https://removebg-ai.usefulapps.app",
			// "th-TH": "https://removebg-ai.usefulapps.app/th",
		},
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
	const isProduction = process.env.NODE_ENV === "production";
	const shouldLoadAnalytics = isProduction && googleAnalyticsId;
	return (
		<html lang="en">
			<head>
				{/* <link rel="alternate" hrefLang="en" href="" /> */}
				<link rel="alternate" hrefLang="th" href="" />
				<link rel="canonical" href="/" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="theme-color" content="#F75270" />
				<link rel="icon" href="/favicon.ico" />
				{shouldLoadAnalytics && (
					<>
						<Script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
						></Script>
						<Script id="google-analytics">
							{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${googleAnalyticsId}');`}
						</Script>
					</>
				)}

				<meta
					name="google-site-verification"
					content="yfe5WZG1j-__COpsKNqcWIsOTS8tbBMtD9ot4chmKpQ"
				/>
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
