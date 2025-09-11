// "use client";

import { useState, useEffect } from "react";
import {
	CurrencyDollarIcon,
	EyeIcon,
	CursorArrowRaysIcon,
	ChartBarIcon,
	ExclamationTriangleIcon,
	CheckCircleIcon,
} from "@heroicons/react/24/outline";
import GoogleAdsManager from "../utils/googleAdsManager";

interface AdPerformanceData {
	impressions: number;
	clicks: number;
	revenue: number;
	ctr: number;
	isLoading: boolean;
	lastUpdated: Date | null;
}

interface AdStatus {
	adsenseEnabled: boolean;
	conversionTrackingEnabled: boolean;
	adBlockerDetected: boolean;
	configurationValid: boolean;
}

export default function GoogleAdsDashboard() {
	const [performance, setPerformance] = useState<AdPerformanceData>({
		impressions: 0,
		clicks: 0,
		revenue: 0,
		ctr: 0,
		isLoading: true,
		lastUpdated: null,
	});

	const [status, setStatus] = useState<AdStatus>({
		adsenseEnabled: false,
		conversionTrackingEnabled: false,
		adBlockerDetected: false,
		configurationValid: false,
	});

	const [recentEvents, setRecentEvents] = useState<
		Array<{
			timestamp: Date;
			type: string;
			description: string;
		}>
	>([]);

	useEffect(() => {
		checkAdStatus();
		loadPerformanceData();
		setupEventTracking();
	}, []);

	const checkAdStatus = async () => {
		const config = GoogleAdsManager.getConfig();
		const adBlockerDetected = await GoogleAdsManager.detectAdBlocker();

		setStatus({
			adsenseEnabled: GoogleAdsManager.isEnabled(),
			conversionTrackingEnabled: !!config.conversionId,
			adBlockerDetected,
			configurationValid: !!(config.adsenseId && config.gtagId),
		});
	};

	const loadPerformanceData = () => {
		// In a real implementation, this would fetch data from Google AdSense API
		// For demo purposes, we'll use mock data
		setTimeout(() => {
			setPerformance({
				impressions: 1250,
				clicks: 87,
				revenue: 12.45,
				ctr: 6.96,
				isLoading: false,
				lastUpdated: new Date(),
			});
		}, 1500);
	};

	const setupEventTracking = () => {
		// Track events for the dashboard
		const events = [
			{
				timestamp: new Date(Date.now() - 300000),
				type: "Conversion",
				description: "Image download completed",
			},
			{
				timestamp: new Date(Date.now() - 600000),
				type: "Engagement",
				description: "User spent 5+ minutes on site",
			},
			{
				timestamp: new Date(Date.now() - 900000),
				type: "Upload",
				description: "File upload started",
			},
		];
		setRecentEvents(events);
	};

	const refreshData = () => {
		setPerformance((prev) => ({ ...prev, isLoading: true }));
		loadPerformanceData();
		GoogleAdsManager.refreshAds();
	};

	const getStatusColor = (isGood: boolean) =>
		isGood ? "text-green-600" : "text-red-600";
	const getStatusIcon = (isGood: boolean) =>
		isGood ? CheckCircleIcon : ExclamationTriangleIcon;

	// Only show dashboard in development or if user has admin access
	if (process.env.NODE_ENV === "production") {
		return null;
	}

	return (
		<div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border z-50">
			<div className="p-4 border-b">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-semibold text-gray-900">
						Google Ads Dashboard
					</h3>
					<button
						onClick={refreshData}
						className="p-1 text-gray-500 hover:text-gray-700 rounded"
					>
						<ChartBarIcon className="h-5 w-5" />
					</button>
				</div>
			</div>

			<div className="p-4 space-y-4">
				{/* Status Indicators */}
				<div className="space-y-2">
					<h4 className="text-sm font-medium text-gray-700">System Status</h4>
					<div className="grid grid-cols-2 gap-2 text-xs">
						<div className="flex items-center space-x-1">
							{(() => {
								const StatusIcon = getStatusIcon(status.adsenseEnabled);
								return (
									<StatusIcon
										className={`h-4 w-4 ${getStatusColor(
											status.adsenseEnabled
										)}`}
									/>
								);
							})()}
							<span className={getStatusColor(status.adsenseEnabled)}>
								AdSense {status.adsenseEnabled ? "ON" : "OFF"}
							</span>
						</div>
						<div className="flex items-center space-x-1">
							{(() => {
								const StatusIcon = getStatusIcon(
									status.conversionTrackingEnabled
								);
								return (
									<StatusIcon
										className={`h-4 w-4 ${getStatusColor(
											status.conversionTrackingEnabled
										)}`}
									/>
								);
							})()}
							<span
								className={getStatusColor(status.conversionTrackingEnabled)}
							>
								Conversion {status.conversionTrackingEnabled ? "ON" : "OFF"}
							</span>
						</div>
						<div className="flex items-center space-x-1">
							{(() => {
								const StatusIcon = getStatusIcon(!status.adBlockerDetected);
								return (
									<StatusIcon
										className={`h-4 w-4 ${getStatusColor(
											!status.adBlockerDetected
										)}`}
									/>
								);
							})()}
							<span className={getStatusColor(!status.adBlockerDetected)}>
								Ad Blocker {status.adBlockerDetected ? "DETECTED" : "NONE"}
							</span>
						</div>
						<div className="flex items-center space-x-1">
							{(() => {
								const StatusIcon = getStatusIcon(status.configurationValid);
								return (
									<StatusIcon
										className={`h-4 w-4 ${getStatusColor(
											status.configurationValid
										)}`}
									/>
								);
							})()}
							<span className={getStatusColor(status.configurationValid)}>
								Config {status.configurationValid ? "VALID" : "INVALID"}
							</span>
						</div>
					</div>
				</div>

				{/* Performance Metrics */}
				<div className="space-y-2">
					<h4 className="text-sm font-medium text-gray-700">
						Today&apos;s Performance
					</h4>
					{performance.isLoading ? (
						<div className="animate-pulse space-y-2">
							<div className="h-4 bg-gray-200 rounded"></div>
							<div className="h-4 bg-gray-200 rounded w-3/4"></div>
						</div>
					) : (
						<div className="grid grid-cols-2 gap-3 text-xs">
							<div className="flex items-center space-x-2">
								<EyeIcon className="h-4 w-4 text-blue-500" />
								<div>
									<div className="font-medium">
										{performance.impressions.toLocaleString()}
									</div>
									<div className="text-gray-500">Impressions</div>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<CursorArrowRaysIcon className="h-4 w-4 text-green-500" />
								<div>
									<div className="font-medium">{performance.clicks}</div>
									<div className="text-gray-500">Clicks</div>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<CurrencyDollarIcon className="h-4 w-4 text-yellow-500" />
								<div>
									<div className="font-medium">
										${performance.revenue.toFixed(2)}
									</div>
									<div className="text-gray-500">Revenue</div>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<ChartBarIcon className="h-4 w-4 text-purple-500" />
								<div>
									<div className="font-medium">
										{performance.ctr.toFixed(2)}%
									</div>
									<div className="text-gray-500">CTR</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Recent Events */}
				<div className="space-y-2">
					<h4 className="text-sm font-medium text-gray-700">Recent Events</h4>
					<div className="space-y-1 max-h-24 overflow-y-auto">
						{recentEvents.map((event, index) => (
							<div key={index} className="text-xs p-2 bg-gray-50 rounded">
								<div className="flex justify-between items-start">
									<span className="font-medium text-gray-900">
										{event.type}
									</span>
									<span className="text-gray-500">
										{event.timestamp.toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit",
										})}
									</span>
								</div>
								<div className="text-gray-600">{event.description}</div>
							</div>
						))}
					</div>
				</div>

				{/* Quick Actions */}
				<div className="space-y-2">
					<h4 className="text-sm font-medium text-gray-700">Quick Actions</h4>
					<div className="flex space-x-2">
						<button
							onClick={refreshData}
							className="flex-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
						>
							Refresh Ads
						</button>
						<button
							onClick={() =>
								window.open("https://adsense.google.com", "_blank")
							}
							className="flex-1 px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200"
						>
							AdSense
						</button>
					</div>
				</div>

				{performance.lastUpdated && (
					<div className="text-xs text-gray-500 text-center">
						Last updated: {performance.lastUpdated.toLocaleTimeString()}
					</div>
				)}
			</div>
		</div>
	);
}
