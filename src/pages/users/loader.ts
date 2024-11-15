import { PrivateResource } from "../../domain/clases/api-resource"
import { IUser } from "../../domain/schema/users/types"

export const UserLoader = async() => {
    const request = new PrivateResource<IUser>('http://localhost:3003/users')
    const users = await request.getAll()
    return users
}