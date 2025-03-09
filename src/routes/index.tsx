import { PostList } from "@/components/PostList";
import { postsQueryOptions } from "@/postsQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";

const Home = () => {
	const postsQuery = useSuspenseQuery(postsQueryOptions);

	const posts = postsQuery.data;

	return <PostList posts={posts} />;
};

export const Route = createFileRoute("/")({
	component: Home,
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(postsQueryOptions);
	},
});
