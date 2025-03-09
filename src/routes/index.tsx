import { postsQueryOptions } from "@/postsQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
	loader: ({ context: { queryClient } }) => {
		return queryClient.ensureQueryData(postsQueryOptions);
	},
});

const App = () => {
	const postsQuery = useSuspenseQuery(postsQueryOptions);

	const posts = postsQuery.data;

	return (
		<div className="">
			<ul className="list-disc pl-4">
				{posts?.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};
