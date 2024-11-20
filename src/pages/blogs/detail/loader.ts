import { requestBlog } from "../../../service/api-gateway"

export const detailLoader = async({params}: {params: {id: string}}) => {
    const { id } = params
    const blog = await requestBlog.getDetail(id)
    return blog
}