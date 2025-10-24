import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
	component: Posts,
});

function Posts() {
	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
}
