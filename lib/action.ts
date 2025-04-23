import { fetcher } from "@/utils/fetcher"

const API_URL =process.env.NEXT_PUBLIC_API_URL

export const getPost = async () => {
    return await fetcher(`${API_URL}/posts`, { cache: "force-cache" })
  }
  
export const getPostById = async (id: number) => {
    return await fetcher(`${API_URL}/posts/${id}`, { cache: "force-cache" })
  }

export const getUser = async() => {
    return await fetcher(`${API_URL}/users`, { cache: "force-cache" })
}

export const getUserById = async (id: number) => {
    return await fetcher(`${API_URL}/users/${id}`, { cache: "force-cache" })
  }