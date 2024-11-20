import { requestBlog, requestUser } from "../../../service/api-gateway"

export const UserEditLoader = async({params}) => {
    const { id } = params
    const user = await requestUser.getOne(id)
    return user
}