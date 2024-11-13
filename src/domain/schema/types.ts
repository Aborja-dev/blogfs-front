import { IBlog, ISesion } from "./entities"

export interface ForContext {
    blogs: ContextPart<IBlog[]>
    sesion: ContextPart<ISesion>
    loading: ContextPart<boolean>
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