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
			<div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
				<span className="text-primary">$</span>
				<span>ls -la posts/</span>
			</div>

			<div className="space-y-6">
				{allPosts.map((post) => (
					<article key={post._meta.path} className="group space-y-1.5">
						{/* Main file line */}
						<Link
							to={`/posts/$id`}
							params={{ id: post._slug }}
							className="block"
						>
							<div className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
								<span className="hidden md:inline text-muted-foreground/60 font-mono">
									drwxr-xr-x
								</span>

								<span className="hidden md:inline text-muted-foreground/60 w-8 text-right flex-shrink-0">
									12
								</span>

								<span className="hidden md:inline text-muted-foreground/60 w-24 flex-shrink-0">
									igorwessel
								</span>

								<span className="hidden md:inline text-muted-foreground/60 w-16 flex-shrink-0">
									staff
								</span>

								<time
									dateTime={post.publishDate?.toString()}
									className="text-muted-foreground/80 font-mono"
								>
									{post.publishDate?.toString()}
								</time>

								<span className="text-foreground group-hover:text-primary transition-colors font-mono">
									{post._meta.filePath}
								</span>

								<span className="hidden md:inline text-muted-foreground/60 text-xs ml-auto">
									[{post.readTime}]
								</span>
							</div>
						</Link>

						{post.tags.length > 0 && (
							<div className="flex items-center gap-2 text-xs pl-4 md:pl-[7.5rem]">
								<span className="text-muted-foreground/40">└─</span>
								<div className="flex flex-wrap gap-2">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="text-muted-foreground/70 hover:text-primary transition-colors cursor-pointer"
										>
											#{tag}
										</span>
									))}
								</div>
							</div>
						)}

						<div className="flex items-start gap-2 text-sm pl-4 md:pl-[7.5rem]">
							<span className="text-muted-foreground/40 mt-0.5">└─</span>
							<p className="text-muted-foreground/70 leading-relaxed">
								{post.summary}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
