import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const fetchPosts = async (): Promise<any> => {
	const { posts } = await fetch(
		"https://dummyjson.com/posts?limit=150&select=title,body,id"
	).then((res) => res.json());

	return posts;
};

export default async function Home() {
	const posts = await fetchPosts();

	return (
		<>
			<h1>Posts</h1>
			<ul className="mt-6 space-y-4">
				{posts.map((post: any) => (
					<li className="list-inside list-disc" key={post.id}>
						<Link
							href={`/posts/${post.id}`}
							className="underline hover:no-underline"
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
