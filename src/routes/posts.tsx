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

function Posts() {
	return (
		<div>
			{posts.getAll().map((post) => (
				<Link to={post._slug} key={post._slug}>
					{post.title}
				</Link>
			))}
		</div>
	);
}
