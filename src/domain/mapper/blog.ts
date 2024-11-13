import { IBlog } from "../schema/entities"

export const blogMapper = (blogFromAPi: {
    "_id": string,
    "title": string,
    "author": string,
    "url": string,
    "likes": number,
    "user": string,
    "__v": number
}): IBlog => ({
    id: blogFromAPi._id,
    title: blogFromAPi.title,
    url: blogFromAPi.url,
    author: blogFromAPi.author,
    likes: blogFromAPi.likes
})