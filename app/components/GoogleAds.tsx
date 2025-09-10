"use client";
import { useEffect } from "react";
import Script from "next/script";

interface GoogleAdsProps {
	adsenseId?: string;
	gtagId?: string;
	conversionId?: string;
	enabled?: boolean;
}

declare global {
	interface Window {
		adsbygoogle: any[];
		gtag: (...args: any[]) => void;
	}
}

const GoogleAds: React.FC<GoogleAdsProps> = ({
	adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID,
	gtagId = process.env.NEXT_PUBLIC_GTAG_ID,
	conversionId = process.env.NEXT_PUBLIC_CONVERSION_ID,
	enabled = process.env.NODE_ENV === "production" &&
		process.env.NEXT_PUBLIC_ENABLE_ADS === "true",
}) => {
	useEffect(() => {
		if (!enabled) return;

		// Initialize AdSense
		if (adsenseId && typeof window !== "undefined") {
			(window.adsbygoogle = window.adsbygoogle || []).push({
				google_ad_client: adsenseId,
				enable_page_level_ads: true,
			});
		}
	}, [adsenseId, enabled]);

	if (!enabled) {
		return null;
	}

	return (
		<>
			{/* Google AdSense */}
			{adsenseId && (
				<Script
					async
					src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
			)}

			{/* Google Ads Global Site Tag (gtag.js) */}
			{gtagId && (
				<>
					<Script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
						strategy="afterInteractive"
					/>
					<Script
						id="google-ads-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtagId}');
                ${conversionId ? `gtag('config', '${conversionId}');` : ""}
              `,
						}}
					/>
				</>
			)}
		</>
	);
};

export default GoogleAds;
