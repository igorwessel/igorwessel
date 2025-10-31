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
					<article
						key={post._slug}
						className="group py-2 hover:bg-muted/50 -mx-2 px-2 rounded transition-colors cursor-pointer"
					>
						<div className="flex items-baseline gap-3 text-sm flex-wrap">
							<time className="text-muted-foreground/70 text-xs shrink-0 w-20">
								{post.publishDate}
							</time>

							<span className="text-muted-foreground/70 text-xs shrink-0 w-12">
								{post.readTime}
							</span>

							<h3 className="text-foreground group-hover:text-primary transition-colors flex-1">
								{post.title}
								{/* <span className="text-muted-foreground/50 ml-1">.mdx</span> */}
							</h3>
						</div>

						{/* Tags inline on hover */}
						<div className="flex gap-2 mt-1 md:pl-36 transition-opacity">
							{post.tags.map((tag) => (
								<span key={tag} className="text-xs text-muted-foreground">
									#{tag}
								</span>
							))}
						</div>
					</article>
				))}
			</section>
		</div>
	);
}
