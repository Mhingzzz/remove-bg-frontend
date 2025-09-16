/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl:
		process.env.NEXT_PUBLIC_APP_URL || "https://removebg-ai.usefulapps.app",
	generateRobotsTxt: true,
	changefreq: "daily",
	priority: 0.7,
	sitemapSize: 5000,
	generateIndexSitemap: false,

	// Additional paths (static pages)
	additionalPaths: async (config) => {
		return [
			await config.transform(config, "/"),
			await config.transform(config, "/privacy-policy"),
			await config.transform(config, "/terms-of-service"),
		];
	},

	// Exclude specific paths
	exclude: ["/api/*", "/admin/*", "/_next/*", "/static/*"],

	// Custom robots.txt configuration
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/_next/", "/static/"],
			},
		],
		additionalSitemaps: ["https://removebg-ai.usefulapps.app/sitemap.xml"],
	},

	// Custom transform function for each URL
	transform: async (config, path) => {
		// Define priority and change frequency for different pages
		const customPriority = {
			"/": 1.0, // Homepage - highest priority
			"/privacy-policy": 0.3,
			"/terms-of-service": 0.3,
		};

		const customChangefreq = {
			"/": "daily",
			"/privacy-policy": "monthly",
			"/terms-of-service": "monthly",
		};

		return {
			loc: path,
			changefreq: customChangefreq[path] || config.changefreq,
			priority: customPriority[path] || config.priority,
			lastmod: new Date().toISOString(),
		};
	},
};
