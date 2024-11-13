import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogCard } from '../ui/cards/BlogCard'
import bgImage from "../assets/bgCard.png";
import { IBlog } from '../domain/schema/entities'
import { useLoading } from '../infrastructure/hooks/useNotification';
import { useBlogs } from '../infrastructure/hooks/useBlogs';
import BlogItem from '../ui/BlogItem';



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
        loading(async () => await load(userID))
            .then(result => {
                if (result) {
                    success({
                        message: 'Se han cargado los blogs'
                    })
                }
            }
            )
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

export default HomePage
