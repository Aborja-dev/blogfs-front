import { requestBlog } from "../../../service/api-gateway"

export const detailLoader = async({params}) => {
    const { id } = params
    const blog = await requestBlog.getOne(id)
    return blog
}