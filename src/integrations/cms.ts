import { allPosts } from "content-collections";

export const posts = {
	getAll: () => allPosts,
	getBySlug: (slug: string) => allPosts.find((post) => post._slug === slug),
};
