import { useContext } from "react"
import {  PrivateResource } from "../../domain/clases/api-resource"
import { IBlog } from "../../domain/schema/entities"
import { IAction } from "../../domain/schema/types"
import { GlobalContext } from "../context/global/context"
// const request = new ApiResourceStub<IBlog>('http://localhost:3003/blogs')
const request = new PrivateResource<IBlog>('http://localhost:3003/api/blogs')
export const useBlogs = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error('no se puede acceder al contexto')
    const { set: dispatch, value } = context.blogs
    const load = async (id: string) => {
        const blogs = await request.getAll(id)
        const action: IAction = { type: 'LOAD', payload: blogs }
        dispatch(action)
    }
    const loadBlogs = async (blogs: IBlog[]) => { 
        const action: IAction = { type: 'LOAD', payload: blogs }
        dispatch(action)
     }
    const remove = async (id: string) => {
        await request.remove(id)
        const action: IAction = { type: 'DELETE', payload: id }
        dispatch(action)
    }
    const like = async (id: string, data: IBlog) => {
        await request.update(id, data)
        const action: IAction = { type: 'UPDATE', payload: { id, content: data } }
        dispatch(action)
    }
    const edit = async (id: string, data: IBlog) => {
        await request.update(id, data)
    }
    const add = async (data: Omit<IBlog, 'id'>) => { 
        const newBlog = await request.create(data)
        const action: IAction = { type: 'ADD', payload: newBlog }
        dispatch(action)
     }
    return {
        blogs: value,
        load,   
        remove,
        like,
        add,
        loadBlogs,
        edit
    }
}