import { getPost, getPostById } from "@/lib/action"
import { postType } from "@/lib/type"
import { notFound } from "next/navigation"


type Props = {
    params: Promise<{ slug: number }>
  }

export async function generateStaticParams() {
    const posts = await getPost()

    if(!posts) return notFound()

    return posts.map((post: postType) => ({
      slug: String(post.id),
    }))
  }

  export async function generateMetadata({ params }: Props) {
    const post = await getPostById((await params).slug)

    if(!post) return notFound()

    return {
      title: post.title,
    }
  }


export default async function Page({
    params,
  }: Props) {
    const { slug } = await params

    const post = await getPostById(slug)

    if(!post) return notFound()

    return <div className="flex flex-col gap-5">
        <p>My Post: {post.title}</p>
        <span>content: {post.body}</span>
    </div>
  }