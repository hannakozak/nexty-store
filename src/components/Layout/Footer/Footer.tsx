export const Footer = () => {
	return (
		<footer className="bg-amber-950 py-8 text-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div>
						<h3 className="text-lg font-semibold text-white">Nexty Commerce</h3>
						<p className="mt-4 text-sm">
							Ignite Your Senses <br />
							Premium Handcrafted Candles for Every Mood
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white">Quick Links</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<a href="#" className="hover:underline">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Services
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white">Contact Us</h3>
						<ul className="mt-4 space-y-2">
							<li>123 Business St, Suite 100</li>
							<li>Email: info@company.com</li>
							<li>Phone: (123) 456-7890</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-white pt-8 text-center">
					<p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
