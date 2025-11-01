import { createFileRoute, Link } from "@tanstack/react-router";

import { posts } from "@/integrations/cms";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/posts/")({
	component: Posts,
	head: () => ({
		meta: [
			...seo({
				title: "Blog | Igor Wessel",
				description: "Read my blog posts",
			}),
		],
	}),
});

export default function Posts() {
	const allPosts = posts.getAll();
	const currentPage = 1;
	const totalPages = Math.ceil(allPosts.length / 10);
	const startIndex = (currentPage - 1) * 10;
	const endIndex = startIndex + 10;
	const currentPosts = allPosts.slice(startIndex, endIndex);

	return (
		<div className="mt-4 space-y-1 border-responsive pl-4">
			<section className="space-y-6">
				{currentPosts.map((post) => (
					<Link
						to="/posts/$id"
						key={post._slug}
						params={{ id: post._slug }}
						title={post.title}
					>
						<article className="group py-2 hover:bg-muted/50 -mx-2 px-2 rounded transition-colors cursor-pointer">
							<div className="flex items-baseline gap-3 text-sm md:text-base flex-wrap">
								<time className="text-muted-foreground/70">
									{post.publishDate}
								</time>

								<span className="text-muted-foreground/70">
									{post.readTime}
								</span>

								<h2 className="text-foreground group-hover:text-primary transition-colors flex-1">
									{post._meta.path}
									<span className="text-muted-foreground/50 ml-1">
										.{post._meta.extension}
									</span>
								</h2>
							</div>

							<div>
								<p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
									<span># </span>
									{post.summary}
								</p>
							</div>

							<ul className="flex gap-2 transition-opacity">
								{post.tags.map((tag, index) => (
									<li key={tag} className="text-xs text-muted-foreground">
										<span>
											#{tag}
											{index + 1 < post.tags.length ? "," : null}
										</span>
									</li>
								))}
							</ul>
						</article>
					</Link>
				))}
			</section>
		</div>
	);
}
