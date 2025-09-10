import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Output configuration for Docker
	output: "standalone",

	// Enable experimental features for better performance
	experimental: {
		optimizeCss: true,
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
						value: "DENY",
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
