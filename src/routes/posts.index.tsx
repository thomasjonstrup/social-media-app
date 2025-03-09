import { PostList } from "@/components/PostList";
import { postsQueryOptions } from "@/postsQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const PostIndexComponent = () => {
	const { data, isLoading } = useSuspenseQuery(postsQueryOptions);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const posts = data;

	return <PostList posts={posts} />;
};

export const Route = createFileRoute("/posts/")({
	component: PostIndexComponent,
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(postsQueryOptions);
	},
});
