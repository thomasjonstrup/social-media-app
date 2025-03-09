import { queryOptions } from "@tanstack/react-query";
import { type PostType, fetchPosts } from "./posts";

export const postsQueryOptions = queryOptions<PostType[]>({
	queryKey: ["posts"],
	queryFn: () => fetchPosts(),
});
