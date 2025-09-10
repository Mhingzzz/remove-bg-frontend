import { useEffect, useState } from "react";
import AdUnit from "./AdUnit";

interface AdPlacementProps {
	position: "header" | "sidebar" | "content" | "footer" | "mobile-banner";
	enabled?: boolean;
	customSlot?: string;
}

const AdPlacement: React.FC<AdPlacementProps> = ({
	position,
	enabled = process.env.NODE_ENV === "production" &&
		process.env.NEXT_PUBLIC_ENABLE_ADS === "true",
	customSlot,
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	if (!enabled) return null;

	// Ad slot configurations based on position
	const getAdConfig = () => {
		const slots = {
			header: {
				slot:
					customSlot ||
					process.env.NEXT_PUBLIC_ADSENSE_HEADER_SLOT ||
					"1234567890",
				format: "horizontal" as const,
				style: { width: "100%", height: "90px" },
				className: "mb-4",
			},
			sidebar: {
				slot:
					customSlot ||
					process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT ||
					"1234567891",
				format: "vertical" as const,
				style: { width: "300px", height: "600px" },
				className: "hidden lg:block",
			},
			content: {
				slot:
					customSlot ||
					process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT ||
					"1234567892",
				format: "rectangle" as const,
				style: { width: "100%", height: "250px" },
				className: "my-8",
			},
			footer: {
				slot:
					customSlot ||
					process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT ||
					"1234567893",
				format: "horizontal" as const,
				style: { width: "100%", height: "90px" },
				className: "mt-8",
			},
			"mobile-banner": {
				slot:
					customSlot ||
					process.env.NEXT_PUBLIC_ADSENSE_MOBILE_SLOT ||
					"1234567894",
				format: "auto" as const,
				style: { width: "100%", height: "50px" },
				className:
					"block lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg",
			},
		};

		return slots[position];
	};

	const adConfig = getAdConfig();

	// Don't show sidebar ads on mobile
	if (position === "sidebar" && isMobile) {
		return null;
	}

	// Don't show mobile banner on desktop
	if (position === "mobile-banner" && !isMobile) {
		return null;
	}

	return (
		<div
			className={`ad-placement ad-placement-${position} ${adConfig.className}`}
		>
			{/* Ad label for transparency */}
			<div className="text-xs text-gray-400 text-center mb-1">
				Advertisement
			</div>

			<AdUnit
				adSlot={adConfig.slot}
				adFormat={adConfig.format}
				style={adConfig.style}
				className="border border-gray-200 rounded-lg overflow-hidden"
				enabled={enabled}
			/>
		</div>
	);
};

// Pre-configured ad components for common use cases
export const HeaderAd: React.FC<{ enabled?: boolean }> = ({
	enabled = true,
}) => <AdPlacement position="header" enabled={enabled} />;

export const SidebarAd: React.FC<{ enabled?: boolean }> = ({ enabled }) => (
	<AdPlacement position="sidebar" enabled={enabled} />
);

export const ContentAd: React.FC<{ enabled?: boolean }> = ({ enabled }) => (
	<AdPlacement position="content" enabled={enabled} />
);

export const FooterAd: React.FC<{ enabled?: boolean }> = ({ enabled }) => (
	<AdPlacement position="footer" enabled={enabled} />
);

export const MobileBannerAd: React.FC<{ enabled?: boolean }> = ({
	enabled,
}) => <AdPlacement position="mobile-banner" enabled={enabled} />;

export default AdPlacement;
