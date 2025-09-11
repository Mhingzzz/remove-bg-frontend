// "use client";

import { useEffect } from "react";

// Simple analytics tracker (you can replace with Google Analytics, Plausible, etc.)
export default function Analytics() {
	useEffect(() => {
		// Track page view
		if (typeof window !== "undefined") {
			console.log("Page viewed:", window.location.pathname);

			// You can replace this with your analytics service
			// Example: gtag('config', 'GA_MEASUREMENT_ID');
			// Example: plausible('pageview');
		}
	}, []);

	return null;
}
