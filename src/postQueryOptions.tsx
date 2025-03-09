import { queryOptions } from "@tanstack/react-query";
import { type PostType, fetchPost } from "./posts";

export const postQueryOptions = (postId: string) => {
	return queryOptions<PostType>({
		queryKey: ["posts", { postId }],
		queryFn: () => fetchPost(postId),
	});
};
