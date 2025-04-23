export type postType = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export interface userType {
    id: number,
    name: string,
    username: string,
    address: {
        street: string, 
        city: string
    },
    phone: string,
    email: string,
    company: {
        name: string
    }
}