import { createFileRoute } from "@tanstack/react-router";
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
	staticData: {
		isDirectory: true,
	},
});

function Posts() {
	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
}
