import { useEffect, useCallback } from "react";
import GoogleAdsTracking from "../utils/googleAdsTracking";

interface UseGoogleAdsReturn {
	trackFileUpload: (fileSize: number, fileType: string) => void;
	trackProcessingComplete: (processingTime: number) => void;
	trackImageDownload: (format: string, fileSize: number) => void;
	trackFeatureInteraction: (
		featureName: string,
		interactionType: string
	) => void;
	trackLanguageChange: (fromLanguage: string, toLanguage: string) => void;
	trackError: (errorType: string, errorMessage: string) => void;
	trackPageView: (pagePath: string, pageTitle?: string) => void;
}

/**
 * Custom hook for Google Ads tracking
 */
export const useGoogleAds = (): UseGoogleAdsReturn => {
	const trackFileUpload = useCallback((fileSize: number, fileType: string) => {
		GoogleAdsTracking.trackFileUpload(fileSize, fileType);
	}, []);

	const trackProcessingComplete = useCallback((processingTime: number) => {
		GoogleAdsTracking.trackBackgroundRemovalComplete(processingTime);
	}, []);

	const trackImageDownload = useCallback((format: string, fileSize: number) => {
		GoogleAdsTracking.trackImageDownload(format, fileSize);
	}, []);

	const trackFeatureInteraction = useCallback(
		(featureName: string, interactionType: string) => {
			GoogleAdsTracking.trackFeatureInteraction(featureName, interactionType);
		},
		[]
	);

	const trackLanguageChange = useCallback(
		(fromLanguage: string, toLanguage: string) => {
			GoogleAdsTracking.trackLanguageChange(fromLanguage, toLanguage);
		},
		[]
	);

	const trackError = useCallback((errorType: string, errorMessage: string) => {
		GoogleAdsTracking.trackError(errorType, errorMessage);
	}, []);

	const trackPageView = useCallback((pagePath: string, pageTitle?: string) => {
		GoogleAdsTracking.trackPageView(pagePath, pageTitle);
	}, []);

	// Track page view on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			trackPageView(window.location.pathname, document.title);
		}
	}, [trackPageView]);

	return {
		trackFileUpload,
		trackProcessingComplete,
		trackImageDownload,
		trackFeatureInteraction,
		trackLanguageChange,
		trackError,
		trackPageView,
	};
};

/**
 * Hook for tracking user engagement with scroll depth
 */
export const useScrollTracking = () => {
	useEffect(() => {
		let maxScroll = 0;
		let scrollTimer: NodeJS.Timeout;

		const trackScrollDepth = () => {
			const scrollPercent = Math.round(
				(window.scrollY /
					(document.documentElement.scrollHeight - window.innerHeight)) *
					100
			);

			if (scrollPercent > maxScroll) {
				maxScroll = scrollPercent;

				// Track significant scroll milestones
				if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
					GoogleAdsTracking.trackCustomEvent({
						eventName: "scroll_depth",
						category: "user_engagement",
						value: scrollPercent,
						parameters: {
							scroll_depth_percent: scrollPercent,
							page_url: window.location.pathname,
						},
					});
				}
			}
		};

		const handleScroll = () => {
			clearTimeout(scrollTimer);
			scrollTimer = setTimeout(trackScrollDepth, 500);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(scrollTimer);
		};
	}, []);
};

/**
 * Hook for tracking time spent on page
 */
export const useTimeTracking = () => {
	useEffect(() => {
		const startTime = Date.now();
		let lastActiveTime = startTime;

		const trackTimeOnPage = () => {
			const timeSpent = Math.round((Date.now() - startTime) / 1000);

			GoogleAdsTracking.trackCustomEvent({
				eventName: "time_on_page",
				category: "user_engagement",
				value: timeSpent,
				parameters: {
					time_spent_seconds: timeSpent,
					page_url: window.location.pathname,
				},
			});
		};

		// Track activity to measure engaged time
		const updateActivity = () => {
			lastActiveTime = Date.now();
		};

		// Track time milestones
		const timeTracker = setInterval(() => {
			const currentTime = Date.now();
			const timeSinceActive = currentTime - lastActiveTime;

			// Only count as engaged time if user was active in last 30 seconds
			if (timeSinceActive < 30000) {
				const totalTime = Math.round((currentTime - startTime) / 1000);

				// Track at 30s, 60s, 2min, 5min milestones
				if ([30, 60, 120, 300].includes(totalTime)) {
					GoogleAdsTracking.trackCustomEvent({
						eventName: "engaged_time",
						category: "user_engagement",
						value: totalTime,
						parameters: {
							engaged_time_seconds: totalTime,
							page_url: window.location.pathname,
						},
					});
				}
			}
		}, 1000);

		// Track page visibility changes
		const handleVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				trackTimeOnPage();
			} else {
				updateActivity();
			}
		};

		// Add event listeners
		["click", "scroll", "keypress", "mousemove"].forEach((event) => {
			document.addEventListener(event, updateActivity, { passive: true });
		});

		document.addEventListener("visibilitychange", handleVisibilityChange);
		window.addEventListener("beforeunload", trackTimeOnPage);

		return () => {
			clearInterval(timeTracker);

			["click", "scroll", "keypress", "mousemove"].forEach((event) => {
				document.removeEventListener(event, updateActivity);
			});

			document.removeEventListener("visibilitychange", handleVisibilityChange);
			window.removeEventListener("beforeunload", trackTimeOnPage);

			trackTimeOnPage();
		};
	}, []);
};

export default useGoogleAds;
