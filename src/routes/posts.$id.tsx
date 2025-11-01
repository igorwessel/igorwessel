import { createFileRoute, redirect } from "@tanstack/react-router";
import Mdx from "@/components/mdx";
import { posts } from "@/integrations/cms";
import { seo } from "@/lib/seo";

import mdxCss from "@/styles/mdx.css?url";

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
	head: (context) => ({
		meta: seo({
			title: context.loaderData?.title ?? "",
			description: context.loaderData?.summary ?? "",
		}),
		links: [
			{
				rel: "stylesheet",
				href: mdxCss,
			},
		],
	}),
	notFoundComponent: () => <div>Post not found</div>,
	component: RouteComponent,
});

function RouteComponent() {
	const post = Route.useLoaderData();

	return (
		<article className="prose prose-terminal lg:prose-lg">
			<Mdx code={post.mdx} />
		</article>
	);
}
