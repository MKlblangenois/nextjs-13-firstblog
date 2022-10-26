import Link from "next/link";

export async function generateStaticParams() {
	const posts = await fetch(
		"https://dummyjson.com/posts?limit=150&select=title,body,id"
	).then((res) => res.json());

	return posts.posts.map((post: any) => ({
		id: post.id + "",
	}));
}

const getPost = async (params: any): Promise<any> => {
	const post = await fetch(`https://dummyjson.com/posts/${params.id}`).then(
		(res) => res.json()
	);

	return post;
};

export default async function PostSingle({ params }: any) {
	const post = await getPost(params);

	return (
		<>
			<Link className="mb-8 inline-block" href="/">
				Retour
			</Link>

			<h1>{post.title}</h1>

			<p className="mt-8">{post.body}</p>
		</>
	);
}
