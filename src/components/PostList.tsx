import type { PostType } from "@/posts";
import { Link } from "@tanstack/react-router";

const PostList = ({ posts }: { posts?: PostType[] }) => {
	return (
		<ul className="list-disc pl-4">
			{posts?.map((post) => (
				<li key={post.id}>
					<Link
						to="/posts/$postId"
						params={{
							postId: post.id,
						}}
					>
						{post.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export { PostList };
