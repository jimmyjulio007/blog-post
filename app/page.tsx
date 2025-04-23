import { getPost } from "@/lib/action";
import { postType } from "@/lib/type";
import Link from "next/link";
import { use } from "react";

export default function Home() {

  const data = use(getPost())

  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>

      {data.slice(0, 10).map((post: postType) => (
        <div key={post.id} className="flex gap-10 p-10 text-start">
        <p>{post.title}</p>
        <span>{post.body}</span>

        <Link href={`/post/${post.id}`}>Lire la suite</Link>
        </div>
      ))}
    </main>
  );
}
