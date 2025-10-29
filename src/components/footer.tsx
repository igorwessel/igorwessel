const links = [
	{
		title: "GitHub",
		href: "https://github.com/igorwessel",
		label: "github.com/igorwessel",
	},
	{
		title: "Twitter",
		href: "https://twitter.com/igorwessel",
		label: "twitter.com/igorwessel",
	},
];

export default function Footer() {
	return (
		<footer className="mt-12 border-t border-border pt-6 pb-8">
			<div className="flex flex-col gap-4 text-sm text-muted-foreground">
				<div>
					<span className="text-primary mr-2">$</span>
					<span>cat footer.txt</span>
				</div>

				<div className="pl-4 space-y-2">
					<p>
						© 2025 Igor Wessel -{" "}
						<a
							href="https://github.com/igorwessel/igorwessel/blob/main/LICENCE"
							className="hover:text-primary transition-colors"
						>
							[terms.txt]
						</a>
					</p>

					<ul className="flex flex-wrap items-center gap-x-4 gap-y-1 pl-4 font-mono marker:text-primary list-['↳'] *:px-2">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									title={link.title}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-primary transition-colors"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
