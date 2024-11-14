import React, { useEffect } from 'react'
import { useLoading } from '../../infrastructure/hooks/useNotification'
import { useBlogs } from '../../infrastructure/hooks/useBlogs'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { IBlog } from '../../domain/schema/entities'
import BlogItem from '../../ui/BlogItem'

const BlogsPage = () => {
    const { success } = useLoading()
    const { blogs, loadBlogs , remove, like } = useBlogs()
    
    const _blogs = useLoaderData() as IBlog[];
    useEffect(() => {
        loadBlogs(_blogs)
    }, [])
    const deleteHandler = async (id: string) => {
        await remove(id)
        success({
            message: 'se ha eliminado el blog'
        })
    }
    const likeHandler = async (id: string, data: IBlog) => {
        await like(id, data)
    }
    return (
        <div className='w-full'>
            <ul className='space-y-5'>
            {
                (blogs as IBlog[]).map(blog =>
                    <BlogItem
                        key={blog.id}
                        blog={blog}
                        onDelete={deleteHandler}
                        onLike={likeHandler}

                    />)
            }
            </ul>
        </div>
    )
}
export default BlogsPage