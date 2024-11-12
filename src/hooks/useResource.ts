import {  useReducer } from "react"
import { PrivateResource } from "../service/api-resource"
import { ResourceReducer } from "../service/reducer"
import { Blog } from "../schema/types"
import { toast } from "react-toastify"

const request = new PrivateResource<Blog>('http://localhost:3003/api/blogs')

export const useResource = () => {
    const [state, dispatch] = useReducer(ResourceReducer, [])
    
    const load = async (id: string) => {
        const blogs = await request.getAll(id)
        const action = {type: 'LOAD', payload: blogs}
        dispatch(action)
    }
    const add = async (blog: Blog) => {
        const response = await request.create(blog)
        const action = {type: 'ADD', payload: response}
        toast.success(`Blog ${blog.title} creado con exito`, {position: 'top-right'})
        dispatch(action)
    }
    const remove =async (id: string) => {
        await request.remove(id)
        const action = {type: 'DELETE', payload: id}
        toast.info('Borrado con exito', {position: 'top-right'})
        dispatch(action)
    }
    const update = async (id: string, data: Blog) => {
        await request.update(id, data)
        const action = {type: 'UPDATE', payload: {id, content: data}}
        dispatch(action)
    }
    return { state: state as Blog[], update, load, add, remove }
}

export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))