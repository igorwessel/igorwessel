import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "@/components/terminal";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen bg-background p-4 md:p-8">
			<div className="mx-auto max-w-4xl">
				<Terminal />

				<div className="mt-8 pl-4 border-l-2 border-border space-y-6">
					<section>
						<h2 className="text-2xl font-bold text-foreground mb-3">
							{">"} Welcome
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							This is a minimalist blog focused on software engineering, system
							design, and development best practices. Navigate through the
							terminal-style interface to explore posts and learn more about me.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-foreground mb-3">
							{">"} Quick Links
						</h2>
						<div className="space-y-2 text-sm">
							<div className="flex items-center gap-2">
								<span className="text-primary">$</span>
								<span className="text-muted-foreground">cd</span>
								<Link
									to="/posts"
									className="text-foreground hover:text-primary transition-colors"
								>
									posts/
								</Link>
								<span className="text-muted-foreground">
									— Read all blog posts
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-primary">$</span>
								<span className="text-muted-foreground">cat</span>
								<Link
									to="/about"
									className="text-foreground hover:text-primary transition-colors"
								>
									about.md
								</Link>
								<span className="text-muted-foreground">
									— Learn more about me
								</span>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-foreground mb-3">
							{">"} Latest Posts
						</h2>
						<div className="space-y-2 text-sm">
							<div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
								<span className="text-muted-foreground">-rw-r--r--</span>
								<span className="text-muted-foreground">2025-01-15</span>
								<span className="text-foreground">
									building-scalable-microservices.md
								</span>
							</div>
							<div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
								<span className="text-muted-foreground">-rw-r--r--</span>
								<span className="text-muted-foreground">2025-01-08</span>
								<span className="text-foreground">
									the-art-of-code-review.md
								</span>
							</div>
							<div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
								<span className="text-muted-foreground">-rw-r--r--</span>
								<span className="text-muted-foreground">2024-12-20</span>
								<span className="text-foreground">
									typescript-advanced-patterns.md
								</span>
							</div>
						</div>
					</section>
				</div>

				<footer className="mt-12 border-t border-border pt-6 pb-8">
					<div className="flex flex-col gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<span className="text-primary">$</span>
							<span>cat footer.txt</span>
						</div>
						<div className="pl-4">
							<p>© 2025 dev.blog — Built with Next.js</p>
							<div className="mt-2 flex gap-4">
								<a
									href="https://github.com"
									className="hover:text-primary transition-colors"
								>
									github
								</a>
								<a
									href="https://twitter.com"
									className="hover:text-primary transition-colors"
								>
									twitter
								</a>
								<a
									href="mailto:hello@dev.blog"
									className="hover:text-primary transition-colors"
								>
									email
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
