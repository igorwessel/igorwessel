import { Link } from "@tanstack/react-router";

interface BlogPostProps {
	id: string;
	date: string;
	title: string;
	excerpt: string;
	tags: string[];
	readTime: string;
}

export function BlogPost({
	id,
	date,
	title,
	excerpt,
	tags,
	readTime,
}: BlogPostProps) {
	return (
		<article className="group border border-border bg-card p-6 hover:border-primary transition-colors">
			<div className="flex items-start gap-4">
				<div className="flex-shrink-0 text-muted-foreground text-sm font-mono">
					<div className="flex items-center gap-2">
						<span className="text-primary">-rw-r--r--</span>
						<span>{id}</span>
					</div>
				</div>

				<div className="flex-1 space-y-3">
					<div className="flex items-center gap-3 text-xs text-muted-foreground">
						<time dateTime={date}>{date}</time>
						<span>•</span>
						<span>{readTime}</span>
					</div>

					<Link to={`/blog/${id}`} className="block">
						<h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
							{title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">{excerpt}</p>
					</Link>

					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-xs px-2 py-1 bg-secondary text-secondary-foreground border border-border"
							>
								#{tag}
							</span>
						))}
					</div>

					<div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
						<span className="text-primary">$</span>
						<span className="group-hover:text-primary transition-colors">
							cat posts/{id}.md
						</span>
					</div>
				</div>
			</div>
		</article>
	);
}
