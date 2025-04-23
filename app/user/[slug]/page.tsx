import { getUserById } from "@/lib/action"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ slug: number }>
  }


export async function generateMetadata({ params }: Props) {

    const {slug} = await params
    const user = await getUserById(slug)

    if(!user) return notFound()

    return {
      title: user.username,
    }
  }

export default async function Page({
    params,
  }: Props) {
    const { slug } = await params

    const user = await getUserById(slug)

    if(!user) return notFound()

    return <div className="flex flex-col gap-5">
        <p>name: {user.name}</p>
        <span>username: {user.username}</span>
    </div>
  }