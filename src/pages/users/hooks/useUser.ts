import { useContext } from "react"
import { GlobalContext } from "../../../infrastructure/context/global/context"
import { IUser } from "../../../domain/schema/users/types"
import { ApiResourceStub, PrivateResource } from "../../../domain/clases/api-resource"
import { IAction } from "../../../domain/schema/types"
const request = new ApiResourceStub<IUser>('http://localhost:3003/users')
//const request = new PrivateResource<IUser>('http://localhost:3003/api/users')
export const useUser = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error('no se puede acceder al contexto')
    const { set: dispatch, value } = context.users
    const loadAsync = async (id: string) => {
        const users = await request.getAll(id)
        const action: IAction = { type: 'LOAD', payload: users }
        dispatch(action)
    }
    const load = async (users: IUser[]) => { 
        const action: IAction = { type: 'LOAD', payload: users }
        dispatch(action)
     }
    const remove = async (id: string) => {
        await request.remove(id)
        const action: IAction = { type: 'DELETE', payload: id }
        dispatch(action)
    }
    const like = async (id: string, data: IUser) => {
        await request.update(id, data)
        const action: IAction = { type: 'UPDATE', payload: { id, content: data } }
        dispatch(action)
    }
    const add = async (data: Omit<IUser, 'id'>) => { 
        const newBlog = await request.create(data)
        const action: IAction = { type: 'ADD', payload: newBlog }
        dispatch(action)
     }
    return {
        users: value,
        loadAsync,   
        remove,
        like,
        add,
        load
    }
}