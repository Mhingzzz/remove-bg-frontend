import Script from "next/script";

export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "RemoveBG AI - Background Remover",
		alternateName: "AI Background Remover",
		description:
			"Professional AI-powered background removal tool. Remove backgrounds from images instantly with high quality results. Free online background remover.",
		url: "https://your-domain.com",
		applicationCategory: "PhotoApplication",
		operatingSystem: "Web Browser",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			description: "Free background removal service",
		},
		featureList: [
			"AI-powered background removal",
			"High quality results",
			"Multiple image format support",
			"Privacy protected",
			"No watermarks",
			"Mobile optimized",
		],
		screenshot: "https://your-domain.com/screenshot.png",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			ratingCount: "1250",
			bestRating: "5",
			worstRating: "1",
		},
		publisher: {
			"@type": "Organization",
			name: "RemoveBG AI",
			logo: {
				"@type": "ImageObject",
				url: "https://your-domain.com/logo.png",
			},
		},
		keywords:
			"background remover, remove background, AI background removal, photo editor, image editing, transparent background, ลบพื้นหลัง, ลบพื้นหลังภาพ, แต่งรูป, ตัดพื้นหลัง",
		inLanguage: ["en", "th"],
		potentialAction: {
			"@type": "UseAction",
			target: "https://your-domain.com",
			description: "Remove background from image using AI",
		},
	};

	const breadcrumbData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://your-domain.com",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Background Remover",
				item: "https://your-domain.com",
			},
		],
	};

	const faqData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "How accurate is the AI background removal?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Our AI achieves 95%+ accuracy with advanced edge detection algorithms. It works best with clear subject-background contrast and handles complex elements like hair, fur, and transparent objects.",
				},
			},
			{
				"@type": "Question",
				name: "What image formats are supported?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "We support JPG, JPEG, PNG, WebP, BMP, and GIF formats. The output is always in PNG format with transparent background for maximum compatibility.",
				},
			},
			{
				"@type": "Question",
				name: "Is there a file size limit?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes, the maximum file size is 10MB per image. For best results, we recommend images with at least 500x500 pixels resolution.",
				},
			},
			{
				"@type": "Question",
				name: "Are my images stored on your servers?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "No, we prioritize your privacy. Images are processed in real-time and automatically deleted from our servers immediately after processing.",
				},
			},
		],
	};

	return (
		<>
			<Script
				id="structured-data-webapp"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>
			<Script
				id="structured-data-breadcrumb"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbData),
				}}
			/>
			<Script
				id="structured-data-faq"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqData),
				}}
			/>
		</>
	);
}
