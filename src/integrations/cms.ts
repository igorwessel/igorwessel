import { allPosts } from "content-collections";

export const posts = {
	getAll: () => allPosts,
	getById: (id: string) => allPosts.find((post) => post._meta.path === id),
};
