import axios from "axios";
import { Blog, Sesion } from "../schema/types";
import { CreateBlogFormData } from "../schema/formTypes";
const baseUrl =  'http://localhost:3003/api'

export const Login = async ({username, password}: {username: string, password: string}): Promise<Sesion> => {
    const {data} = await axios.post(`${baseUrl}/users/login`, {username, password})
    return {
        ...data,
        blogs: data.blogs.map(blogMapper)
    }
}
export const getBlogs = async (userID: string): Promise<Blog[]> => {
    const token = getToken()
    const {data} = await axios.get(`${baseUrl}/blogs/${userID}`, {headers: {Authorization: `bearer ${token}`}})
    return data.map(blogMapper)
}
export const CreateNewBlog = async ({title, author, url}: CreateBlogFormData): Promise<Blog> => {
    const token = getToken()
    const {data} = await axios.post(`${baseUrl}/blogs`, {title, author, url}, {headers: {Authorization: `bearer ${token}`}})
    return blogMapper(data)
}
export const updateVotes = async (blog: Blog): Promise<Blog> => {
    const token = getToken()
    const {data} = await axios.put(`${baseUrl}/blogs/${blog.id}`, {likes: blog.likes + 1}, {headers: {Authorization: `bearer ${token}`}})
    return blogMapper(data)
}
export const deleteBlog = async (id: string) => {
    const token = getToken()
    await axios.delete(`${baseUrl}/blogs/${id}`, {headers: {Authorization: `bearer ${token}`}})
}
const blogMapper = (blogFromAPi: {
    "_id": string,
    "title": string,
    "author": string,
    "url": string,
    "likes": number,
    "user": string,
    "__v": number
}): Blog => ({
    id: blogFromAPi._id,
    title: blogFromAPi.title,
    url: blogFromAPi.url,
    author: blogFromAPi.author,
    likes: blogFromAPi.likes
})

export const getToken = () => {
    return window.localStorage.getItem('token')
}