import axios from "redaxios";

export type PostType = {
	id: string;
	title: string;
	body: string;
};

export class PostNotFound extends Error {
	constructor(id: string) {
		super(`Post with id ${id} not found`);
	}
}

export const fetchPost = async (postId: string): Promise<PostType> => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const post = await axios
		.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then((res) => res.data)
		.catch((error) => {
			if (error.response?.status === 404) {
				throw new PostNotFound(`Post with id "${postId}" not found!`);
			}
			throw error;
		});

	return post;
};

export const fetchPosts = async (): Promise<PostType[]> => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return axios
		.get<Array<PostType>>("https://jsonplaceholder.typicode.com/posts")
		.then((r) => r.data.slice(0, 10));
};
