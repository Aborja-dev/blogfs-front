import { requestBlog, requestUser } from "../../service/api-gateway"

export const UserLoader = async() => {
    const users = await requestUser.getAll()
    return users
}