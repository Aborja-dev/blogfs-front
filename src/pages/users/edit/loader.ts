/* eslint-disable @typescript-eslint/no-explicit-any */
import { requestUser } from "../../../service/api-gateway"

export const UserEditLoader = async({params}: any) => {
    const { id } = params
    const user = await requestUser.getOne(id)
    return user
}