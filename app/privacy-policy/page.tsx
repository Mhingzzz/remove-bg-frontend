import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - RemoveBG AI",
	description:
		"Privacy policy for RemoveBG AI background removal service. Learn how we protect your data and images.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-4xl mx-auto px-4 py-12">
				<h1 className="text-4xl font-bold text-foreground mb-8">
					Privacy Policy
				</h1>

				<div className="prose prose-lg max-w-none text-foreground">
					<p className="text-lg mb-6">
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Information We Collect
						</h2>
						<p className="mb-4">
							RemoveBG AI is committed to protecting your privacy. We only
							process the images you upload to remove backgrounds and do not
							store them permanently on our servers.
						</p>
						<ul className="list-disc pl-6 mb-4">
							<li>Images uploaded for background removal processing</li>
							<li>Basic usage analytics (anonymous)</li>
							<li>Browser information for optimization</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							How We Use Your Information
						</h2>
						<ul className="list-disc pl-6 mb-4">
							<li>Process your images to remove backgrounds</li>
							<li>Improve our AI algorithms</li>
							<li>Provide technical support</li>
							<li>Analyze usage patterns (anonymously)</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Data Security</h2>
						<p className="mb-4">
							Your uploaded images are automatically deleted from our servers
							after processing. We use industry-standard encryption and security
							measures to protect your data during processing.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please
							contact us at:
							<a
								href="mailto:support@removebg-ai.usefulapps.app"
								className="text-primary hover:underline ml-1"
							>
								support@removebg-ai.usefulapps.app
							</a>
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
