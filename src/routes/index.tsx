import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";

import { Terminal } from "@/components/terminal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		meta: [
			...seo({
				title: "Home | Igor Wessel",
			}),
		],
	}),
});

function App() {
	return (
		<div className="">
			<div className="mx-auto flex flex-col">
				<Terminal />

				<div className="mt-8 pl-4 border-l-2 border-border space-y-6">
					<section>
						<h2 className="text-2xl font-bold text-foreground mb-3">
							{">"} Quick Links
						</h2>
						<nav className="space-y-2 text-sm">
							<ul>
								<li className="flex items-center gap-2">
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
								</li>
								<li className="flex items-center gap-2">
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
								</li>
							</ul>
						</nav>
					</section>

					<section>
						<h2 className="text-2xl font-bold text-foreground mb-3">
							{">"} Latest Posts
						</h2>
						<ul className="space-y-2 text-sm">
							{allPosts.map((post) => (
								<li
									key={post._meta.filePath}
									className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
								>
									<span className="text-muted-foreground">-rw-r--r--</span>
									<span className="text-muted-foreground">2025-01-15</span>
									<Link
										to="/posts/$id"
										params={{ id: post._meta.filePath }}
										className="text-foreground"
									>
										{post._meta.filePath}
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}
