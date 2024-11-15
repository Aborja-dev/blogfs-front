import { PrivateResource } from "../../domain/clases/api-resource";
import { IBlog } from "../../domain/schema/entities";

export const BlogLoader = async() => {
    const request = new PrivateResource<IBlog>('http://localhost:3003/blogs')
    const userID = window.localStorage.getItem('userID')
    const blogs = await request.getAll()
    return blogs
}