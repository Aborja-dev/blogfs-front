export interface Blog {
    id: string
    title: string
    url: string,
    author: string,
    likes: number
}
export interface Sesion {
    token: string
    name: string
    blogs: Blog[]
    id: string
}