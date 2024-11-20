import { IUser } from "./types"
export type UserID = IUser['id']
export type CreateUser = (params: Pick<IUser, 'name' | 'username' | 'passwordHash'>) => void
export type DeleteUser = (id: UserID) => void
export type UpdateUser = (id: UserID, params: Partial<Pick<IUser, 'name' | 'username' | 'passwordHash'>>) => void
export type SelectUser = (id: UserID) => void