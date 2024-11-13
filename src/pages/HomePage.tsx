import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Blog } from '../schema/types'
import { BlogCard } from '../ui/cards/BlogCard'
import bgImage from "../assets/bgCard.png";

import { IBlog } from '../domain/schema/entities'
import { useLoading } from '../infrastructure/hooks/useNotification';
import { useBlogs } from '../infrastructure/hooks/useBlogs';



const HomePage = () => {
    const { loading, success } = useLoading()
    const { blogs, load, remove, like } = useBlogs()
    const navigate = useNavigate()
    useEffect(() => {
        const userID = window.localStorage.getItem('userID')
        if (!userID) navigate('/login')
        if (blogs.length === 0) loadBlogs(userID as string)
    }, [])
    const loadBlogs = async (userID: string) => {
        await loading(async () => await load(userID))
        success({
            message: 'Se han cargado los blogs'
        })
    }
    const deleteHandler = async (id: string) => {
        await loading(async () => await remove(id))
        success({
            message: 'se ha eliminado el blog'
        })
    }
    const likeHandler = async (id: string, data: IBlog) => {
        await like(id, data)
    }
    return (
        <div className='w-full grid grid-cols-3 gap-4'>
            {
                (blogs as Blog[]).map(blog =>
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                        date='2024-01-01'
                        image={bgImage}
                        summary='lorem ipsum'
                        onDelete={deleteHandler}
                        onLike={likeHandler}

                    />)
            }
        </div>
    )
}

export default HomePage
