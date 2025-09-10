// Google Ads Conversion Tracking Utilities

interface ConversionEvent {
	action: string;
	category?: string;
	label?: string;
	value?: number;
	currency?: string;
	transactionId?: string;
}

interface CustomEvent {
	eventName: string;
	category?: string;
	label?: string;
	value?: number;
	parameters?: Record<string, string | number | boolean>;
}

class GoogleAdsTracking {
	private static conversionId = process.env.NEXT_PUBLIC_CONVERSION_ID;
	private static enabled =
		process.env.NODE_ENV === "production" &&
		process.env.NEXT_PUBLIC_ENABLE_ADS === "true";

	/**
	 * Track a conversion event
	 */
	static trackConversion(event: ConversionEvent): void {
		if (!this.enabled || !this.conversionId || typeof window === "undefined") {
			console.log("Conversion tracking disabled or not available");
			return;
		}

		try {
			if (window.gtag) {
				window.gtag("event", "conversion", {
					send_to: `${this.conversionId}/${event.action}`,
					event_category: event.category || "engagement",
					//   event_label: event.label,
					value: event.value || 1,
					currency: event.currency || "USD",
					//   transaction_id: event.transactionId
				});

				console.log("Conversion tracked:", event);
			}
		} catch (error) {
			console.error("Error tracking conversion:", error);
		}
	}

	/**
	 * Track custom events for remarketing
	 */
	static trackCustomEvent(event: CustomEvent): void {
		if (!this.enabled || typeof window === "undefined") {
			console.log("Custom event tracking disabled or not available");
			return;
		}

		try {
			if (window.gtag) {
				const gtagParams: Record<string, string | number | boolean> = {
					event_category: event.category || "custom",
					event_label: event.label || "",
					value: event.value || 0,
				};

				// Add custom parameters if provided
				if (event.parameters) {
					Object.assign(gtagParams, event.parameters);
				}

				window.gtag("event", event.eventName, gtagParams);

				console.log("Custom event tracked:", event);
			}
		} catch (error) {
			console.error("Error tracking custom event:", error);
		}
	}

	/**
	 * Track page views for remarketing
	 */
	static trackPageView(pagePath: string, pageTitle?: string): void {
		if (!this.enabled || typeof window === "undefined" || !this.conversionId)
			return;

		try {
			if (window.gtag) {
				window.gtag("config", this.conversionId, {
					page_path: pagePath,
					page_title: pageTitle || document.title,
				});
			}
		} catch (error) {
			console.error("Error tracking page view:", error);
		}
	}

	/**
	 * Track file upload events
	 */
	static trackFileUpload(fileSize: number, fileType: string): void {
		this.trackConversion({
			action: "file_upload",
			category: "engagement",
			label: fileType,
			value: Math.round(fileSize / 1024), // KB
		});

		this.trackCustomEvent({
			eventName: "file_upload_started",
			category: "user_interaction",
			label: fileType,
			parameters: {
				file_size_kb: Math.round(fileSize / 1024),
				file_type: fileType,
			},
		});
	}

	/**
	 * Track background removal completion
	 */
	static trackBackgroundRemovalComplete(processingTime: number): void {
		this.trackConversion({
			action: "background_removal_complete",
			category: "conversion",
			label: "processing_success",
			value: Math.round(processingTime * 100), // centiseconds
		});

		this.trackCustomEvent({
			eventName: "processing_completed",
			category: "service_usage",
			parameters: {
				processing_time_seconds: processingTime,
				success: true,
			},
		});
	}

	/**
	 * Track image download events
	 */
	static trackImageDownload(format: string, fileSize: number): void {
		this.trackConversion({
			action: "image_download",
			category: "conversion",
			label: format,
			value: 1,
		});

		this.trackCustomEvent({
			eventName: "download_completed",
			category: "goal_completion",
			label: format,
			parameters: {
				download_format: format,
				file_size_kb: Math.round(fileSize / 1024),
			},
		});
	}

	/**
	 * Track user engagement with features
	 */
	static trackFeatureInteraction(
		featureName: string,
		interactionType: string
	): void {
		this.trackCustomEvent({
			eventName: "feature_interaction",
			category: "user_engagement",
			label: featureName,
			parameters: {
				interaction_type: interactionType,
				feature_name: featureName,
			},
		});
	}

	/**
	 * Track language changes for international users
	 */
	static trackLanguageChange(fromLanguage: string, toLanguage: string): void {
		this.trackCustomEvent({
			eventName: "language_changed",
			category: "user_preference",
			parameters: {
				from_language: fromLanguage,
				to_language: toLanguage,
			},
		});
	}

	/**
	 * Track errors for optimization
	 */
	static trackError(errorType: string, errorMessage: string): void {
		this.trackCustomEvent({
			eventName: "error_occurred",
			category: "error",
			label: errorType,
			parameters: {
				error_type: errorType,
				error_message: errorMessage.substring(0, 100), // Limit length
			},
		});
	}

	/**
	 * Set user properties for remarketing
	 */
	static setUserProperties(
		properties: Record<string, string | number | boolean>
	): void {
		if (!this.enabled || typeof window === "undefined" || !this.conversionId)
			return;

		try {
			if (window.gtag) {
				// Set user properties using gtag set command
				for (const [key, value] of Object.entries(properties)) {
					window.gtag("set", key, { value: String(value) });
				}
			}
		} catch (error) {
			console.error("Error setting user properties:", error);
		}
	}
}

// Predefined conversion actions for easy tracking
export const ConversionActions = {
	FILE_UPLOAD: "file_upload",
	PROCESSING_COMPLETE: "background_removal_complete",
	IMAGE_DOWNLOAD: "image_download",
	SIGNUP: "user_signup",
	SUBSCRIPTION: "subscription",
	CONTACT_FORM: "contact_form_submit",
} as const;

// Custom event names for remarketing
export const CustomEvents = {
	FEATURE_INTERACTION: "feature_interaction",
	LANGUAGE_CHANGE: "language_changed",
	ERROR_OCCURRED: "error_occurred",
	PAGE_ENGAGEMENT: "page_engagement",
	SOCIAL_SHARE: "social_share",
} as const;

export default GoogleAdsTracking;
