import { postQueryOptions } from "@/postQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId")({
	component: RouteComponent,
	loader: ({ context: { queryClient }, params: { postId } }) => {
		return queryClient.ensureQueryData(postQueryOptions(postId));
	},
});

function RouteComponent() {
	const postId = Route.useParams().postId;
	const { data, isLoading } = useSuspenseQuery(postQueryOptions(postId));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const post = data;

	return (
		<div>
			<h1 className="text-xl font-bold">{post.title}</h1>
			<p className="text-sm">{post.body}</p>
		</div>
	);
}
