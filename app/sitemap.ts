import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://your-domain.com",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
			alternates: {
				languages: {
					en: "https://your-domain.com",
					th: "https://your-domain.com/th",
				},
			},
		},
		{
			url: "https://your-domain.com/api",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://your-domain.com/privacy",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://your-domain.com/terms",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
