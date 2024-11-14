import { IBlog, ISesion } from "./entities"
import { IUser } from "./users/types"

export interface ForContext {
    blogs: ContextPart<IBlog[]>
    sesion: ContextPart<ISesion | null>
    loading: ContextPart<boolean>
    users: ContextPart<IUser[]>
}
export interface ContextPart<T> {
    value: T
    set: (newValue: T | IAction) => void 
}
export interface IAction {
    type: ResourceActionType
    payload: unknown
}

export type ResourceActionType = 'LOAD' | 'ADD' | 'DELETE' | 'UPDATE' | 'CLEAN'
export type SesionStateType = 'DEFAULT'  | 'EXPIRED' | 'LOGGED'