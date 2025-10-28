import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { posts } from "@/integrations/cms";

export const Route = createFileRoute("/posts/$id")({
	loader: ({ params }) => {
		const post = posts.getBySlug(params.id);

		if (!post) {
			throw redirect({
				to: "/posts",
				replace: true,
			});
		}

		return post;
	},
	component: RouteComponent,
});

function RouteComponent() {
	const post = Route.useLoaderData();

	return <MDXContent code={post.mdx} />;
}
