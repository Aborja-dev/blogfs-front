
import { requestBlog } from "../../service/api-gateway";

export const BlogLoader = async() => {
    const userID = window.localStorage.getItem('userID')
    const blogs = await requestBlog.getAll(userID as string)
    return blogs
}