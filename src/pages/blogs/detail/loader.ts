/* eslint-disable @typescript-eslint/no-explicit-any */
import { requestBlog } from "../../../service/api-gateway"

export const detailLoader = async({params}: any) => {
    const { id } = params
    const blog = await requestBlog.getDetail(id)
    return blog
}