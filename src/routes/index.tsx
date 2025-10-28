import { createFileRoute, Link } from "@tanstack/react-router";

import { posts } from "@/integrations/cms";
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
				<h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
					{">"} Igor Wessel
				</h1>

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
							{posts.getAll().map((post) => (
								<li key={post._meta.filePath} className="space-y-1">
									<div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
										<span className="text-muted-foreground">-rw-r--r--</span>
										<span className="text-muted-foreground">2025-01-15</span>
										<Link
											to="/posts/$id"
											params={{ id: post._meta.path }}
											className="text-foreground"
										>
											{post._meta.filePath}
										</Link>
									</div>
									{post.tags.length && (
										<div className="flex gap-2 pl-24">
											{post.tags.map((tag) => (
												<span
													key={tag}
													className="text-xs text-muted-foreground"
												>
													#{tag}
												</span>
											))}
										</div>
									)}
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}
