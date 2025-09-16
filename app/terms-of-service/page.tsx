import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service - RemoveBG AI",
	description:
		"Terms of service for RemoveBG AI background removal service. Learn about our service terms and conditions.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function TermsOfService() {
	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-4xl mx-auto px-4 py-12">
				<h1 className="text-4xl font-bold text-foreground mb-8">
					Terms of Service
				</h1>

				<div className="prose prose-lg max-w-none text-foreground">
					<p className="text-lg mb-6">
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
						<p className="mb-4">
							By using RemoveBG AI, you agree to be bound by these Terms of
							Service. If you do not agree to these terms, please do not use our
							service.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Service Description</h2>
						<p className="mb-4">
							RemoveBG AI provides an AI-powered background removal service that
							allows users to remove backgrounds from images automatically.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							User Responsibilities
						</h2>
						<ul className="list-disc pl-6 mb-4">
							<li>You must own or have rights to the images you upload</li>
							<li>
								Do not upload inappropriate, illegal, or copyrighted content
							</li>
							<li>Use the service in compliance with applicable laws</li>
							<li>Do not attempt to abuse or overload our servers</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Service Availability
						</h2>
						<p className="mb-4">
							We strive to maintain high service availability but cannot
							guarantee 100% uptime. The service is provided &quot;as is&quot;
							without warranties.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							Limitation of Liability
						</h2>
						<p className="mb-4">
							RemoveBG AI shall not be liable for any indirect, incidental,
							special, or consequential damages arising from the use of our
							service.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
						<p>
							For questions about these Terms of Service, please contact us at:
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
