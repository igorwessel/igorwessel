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

					<Link to={`/posts/$id`} params={{ id }} className="block">
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

interface BlogPostProps {
	id: string;
	date: string;
	title: string;
	excerpt: string;
	tags: string[];
	readTime: string;
}

export function BlogPost2({
	id,
	date,
	title,
	excerpt,
	tags,
	readTime,
}: BlogPostProps) {
	return (
		<Link to={`/posts/$id`} params={{ id }} className="block group">
			<article className="space-y-1 hover:bg-secondary/20 p-2 -mx-2 transition-colors">
				{/* Terminal file listing style */}
				<div className="flex items-start gap-3 text-sm font-mono">
					<span className="text-primary">-rw-r--r--</span>
					<span className="text-muted-foreground">{date}</span>
					<span className="text-muted-foreground">{readTime}</span>
					<span className="text-foreground group-hover:text-primary transition-colors flex-1">
						{title.toLowerCase().replace(/\s+/g, "-")}.md
					</span>
				</div>

				{/* Excerpt as terminal comment */}
				<div className="pl-8 text-sm text-muted-foreground">
					<span className="text-primary">#</span> {excerpt}
				</div>

				{/* Tags as inline terminal output */}
				<div className="pl-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
					{tags.map((tag) => (
						<span key={tag}>#{tag}</span>
					))}
				</div>
			</article>
		</Link>
	);
}

interface TerminalPaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function TerminalPagination({
	currentPage,
	totalPages,
	onPageChange,
}: TerminalPaginationProps) {
	if (totalPages <= 1) return null;

	return (
		<div className="mt-6 font-mono text-sm">
			<div className="flex items-center gap-2 text-muted-foreground">
				<span className="text-primary">$</span>
				<span>ls --page</span>

				<div className="flex items-center gap-1">
					<button
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-2 py-0.5 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						aria-label="Previous page"
					>
						←
					</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<button
							key={page}
							onClick={() => onPageChange(page)}
							className={`px-2 py-0.5 transition-colors ${
								currentPage === page
									? "text-primary font-bold"
									: "hover:text-primary"
							}`}
							aria-label={`Page ${page}`}
							aria-current={currentPage === page ? "page" : undefined}
						>
							{page}
						</button>
					))}

					<button
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-2 py-0.5 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						aria-label="Next page"
					>
						→
					</button>
				</div>
			</div>
		</div>
	);
}

export function BlogPost3({
	id,
	date,
	title,
	excerpt,
	tags,
	readTime,
}: BlogPostProps) {
	return (
		<Link to={`/posts/$id`} params={{ id }} className="block group">
			<article className="space-y-0.5 hover:bg-secondary/10 py-1.5 transition-colors font-mono text-sm">
				{/* Main file listing line */}
				<div className="flex flex-wrap items-center gap-2">
					<span className="text-primary">-rw-r--r--</span>
					<span className="text-muted-foreground">
						[{date} | {readTime}]
					</span>
					<span className="text-foreground group-hover:text-primary transition-colors">
						{title.toLowerCase().replace(/\s+/g, "-")}.md
					</span>
				</div>

				{/* Description as terminal comment */}
				<div className="text-muted-foreground text-xs sm:text-sm pl-2">
					<span className="text-primary">#</span> {excerpt}
				</div>

				{/* Tags inline */}
				<div className="text-muted-foreground text-xs pl-2">
					{tags.map((tag, index) => (
						<span key={tag}>
							#{tag}
							{index < tags.length - 1 ? ", " : ""}
						</span>
					))}
				</div>
			</article>
		</Link>
	);
}

export default function Posts() {
	const allPosts = posts.getAll().concat(Array(30).fill(posts.getAll()[0]));
	const currentPage = 1;
	const totalPages = Math.ceil(allPosts.length / 10);
	const startIndex = (currentPage - 1) * 10;
	const endIndex = startIndex + 10;
	const currentPosts = allPosts.slice(startIndex, endIndex);

	return (
		<div className="mt-4 space-y-1">
			{/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
				<span className="text-primary">$</span>
				<span>ls posts/</span>
			</div> */}

			<div className="space-y-6">
				<BlogPost
					id={allPosts[0]._slug}
					date={allPosts[0].publishDate?.toString()}
					title={allPosts[0].title}
					excerpt={allPosts[0].summary}
					tags={allPosts[0].tags}
					readTime={allPosts[0].readTime}
				/>
				<BlogPost2
					id={allPosts[0]._slug}
					date={allPosts[0].publishDate?.toString()}
					title={allPosts[0].title}
					excerpt={allPosts[0].summary}
					tags={allPosts[0].tags}
					readTime={allPosts[0].readTime}
				/>
				<BlogPost3
					id={allPosts[0]._slug}
					date={allPosts[0].publishDate?.toString()}
					title={allPosts[0].title}
					excerpt={allPosts[0].summary}
					tags={allPosts[0].tags}
					readTime={allPosts[0].readTime}
				/>
				{currentPosts.map((post, idx) => (
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
								<ul className="text-xs mt-1 space-x-2">
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

				<div className="text-sm text-muted-foreground mt-4 font-mono">
					<span className="text-primary">$</span> showing {0 + 1}-
					{Math.min(endIndex, allPosts.length)} of {allPosts.length} posts
				</div>

				<TerminalPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={() => {}}
				/>
			</div>
		</div>
	);
}
