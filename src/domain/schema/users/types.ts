import { IBlog } from "../entities"

export interface IUser  {
    id: string
    username: string
    name: string
    passwordHash: string
    blogs?: IBlog[]
}