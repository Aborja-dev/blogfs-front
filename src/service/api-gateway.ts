import axios from "axios";
import { ISesion } from "../domain/schema/entities";
import { blogMapper } from "../domain/mapper/blog";

const baseUrl =  'http://localhost:3003/api'

export const Login = async ({username, password}: {username: string, password: string}): Promise<ISesion> => {
    const {data} = await axios.post(`${baseUrl}/users/login`, {username, password})
    return {
        ...data,
        blogs: data.blogs.map(blogMapper)
    }
}


