import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/posts/")({
	loader: () => ({ allPosts }),
	component: Posts,
});

function Posts() {
	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
}
