import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Output configuration for Docker
	output: "standalone",

	// Enable experimental features for better performance
	experimental: {
		optimizeCss: true, // Re-enabled - critters package now installed
		optimizePackageImports: ["@heroicons/react", "framer-motion"],
	},

	// Image optimization
	images: {
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	// Performance optimizations
	compress: true,
	poweredByHeader: false,

	// Security headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN", // Allow Google Ads iframes
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
					// Content Security Policy that allows Google Ads
					{
						key: "Content-Security-Policy",
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://tpc.googlesyndication.com",
							"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://pagead2.googlesyndication.com",
							"img-src 'self' blob: data: https: https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net",
							"font-src 'self' https://fonts.gstatic.com",
							"connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://region1.google-analytics.com",
							"frame-src 'self' https://googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net",
							"object-src 'none'",
							"base-uri 'self'",
							"form-action 'self'",
						].join("; "),
					},
				],
			},
		];
	},

	// Enable bundle analyzer in development
	webpack: (config, { dev, isServer }) => {
		if (dev && !isServer) {
			config.optimization.moduleIds = "named";
		}
		return config;
	},
};

export default nextConfig;
