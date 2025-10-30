import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/integrations/cms";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/posts")({
	component: Posts,
	head: () => ({
		meta: [
			...seo({
				title: "Blog | Igor Wessel",
				description: "Read my blog posts",
			}),
		],
	}),
	staticData: {
		isDirectory: true,
	},
});

const allPosts = posts.getAll();

export default function Posts() {
	return (
		<div className="mt-4 space-y-1">
			{/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
				<span className="text-primary">$</span>
				<span>ls posts/</span>
			</div> */}

			<div className="space-y-6">
				{allPosts.concat(Array(5).fill(allPosts[0])).map((post, idx) => (
					<article key={post._meta.path + idx} className="group space-y-1.5">
						<Link
							to={`/posts/$id`}
							params={{ id: post._slug }}
							className="block"
						>
							<div className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
								<time
									dateTime={post.publishDate?.toString()}
									className="text-muted-foreground/80 font-mono"
								>
									[{post.publishDate?.toString()} | {post.readTime}]
								</time>

								<span className="text-foreground group-hover:text-primary transition-colors font-mono">
									{post._meta.filePath}
								</span>
							</div>
						</Link>

						<div className="flex items-start gap-2 text-sm">
							<span className="text-primary">↳</span>
							<p className="text-muted-foreground/70 leading-relaxed">
								{post.summary}
							</p>
						</div>

						{post.tags.length > 0 && (
							<div className="text-xs pl-6">
								<ul className="flex gap-1">
									{post.tags.map((tag, index) => (
										<li key={tag}>
											<span className="text-muted-foreground/70 hover:text-primary transition-colors cursor-pointer">
												#{tag}
												{index < post.tags.length - 1 && ","}
											</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</article>
				))}
			</div>
		</div>
	);
}
