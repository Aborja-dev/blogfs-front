export interface IBlog {
    id: string
    title: string
    url: string,
    author: string,
    likes: number
}
export interface ISesion {
    token: string
    name: string
    blogs: IBlog[]
    id: string
}