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
	return (
		<section className="mt-4 space-y-6 border-responsive pl-4">
			{allPosts.map((post) => (
				<Link key={post._slug} to="/posts/$id" params={{ id: post._meta.path }}>
					<article className="grid grid-cols-[auto_1fr_auto] gap-4 py-2 group hover:bg-accent/5 -mx-2 px-2 rounded-md transition-colors">
						<div className="flex items-center gap-3 text-muted-foreground text-xs">
							<span className="hidden md:inline">-rw-r--r--</span>
							<time dateTime={post.publishAt}>
								{new Date(post.publishAt).toLocaleDateString("pt-BR", {
									day: "2-digit",
									month: "short",
								})}
							</time>
						</div>

						<span className="text-foreground group-hover:text-primary transition-colors truncate">
							{post._meta.filePath}
						</span>

						<div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">
							<span>{post.readTime}</span>
							{post.tags.length > 0 && (
								<>
									<span className="hidden md:inline">•</span>
									<span className="hidden md:inline">
										{post.tags[0] && `#${post.tags[0]}`}
									</span>
								</>
							)}
						</div>
					</article>
				</Link>
			))}
		</section>
	);
}
