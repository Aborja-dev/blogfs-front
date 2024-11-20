import axios from "axios";
import { IBlog, ISesion } from "../domain/schema/entities";
import { blogMapper } from "../domain/mapper/blog";
import { PrivateResource } from "../domain/clases/api-resource";
import { IUser } from "../domain/schema/users/types";

const baseUrl =  'http://localhost:3003/api'

export const Login = async ({username, password}: {username: string, password: string}): Promise<ISesion> => {
    const {data} = await axios.post(`${baseUrl}/users/login`, {username, password})
    return {
        ...data,
        blogs: data.blogs.map(blogMapper)
    }
}
export const GetUserDetails = async (id: string): Promise<ISesion> => {
    const token = localStorage.getItem('token')
    const {data} = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return {
        ...data,
        blogs: data.blogs.map(blogMapper)
    }
}

export const requestBlog = new PrivateResource<IBlog>('http://localhost:3003/api/blogs')
export const requestUser = new PrivateResource<IUser>('http://localhost:3003/api/users')

