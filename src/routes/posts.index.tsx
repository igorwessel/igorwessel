import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/posts/")({
	loader: () => ({ allPosts }),
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

function Posts() {
	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
}
