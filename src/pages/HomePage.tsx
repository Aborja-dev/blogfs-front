import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SesionContext } from '../context/Sesion/context'
import { Blog } from '../schema/types'
import { BlogCard } from '../ui/cards/BlogCard'
import { toast } from 'react-toastify'
import bgImage from "../assets/bgCard.png";
import { useBlogs } from '../hooks/useBlogs'
import { IBlog } from '../domain/schema/entities'

const HomePage = () => {
    const {loading } = useContext(SesionContext)
    //const { load, state: _blogs } = blogs
    const {blogs, load, remove, like} = useBlogs()
    const [_, setLoading] = loading
    const navigate = useNavigate()
    useEffect(() => {
        const userID = window.localStorage.getItem('userID')
        if (!userID) navigate('/login')
        if (blogs.length === 0) loadBlogs(userID as string)
    }, [])
    const loadBlogs = async (userID: string) => {
        setLoading(true)
        await load(userID)
        setLoading(false)
        toast.info('Se han cargado los blogs', {position: 'top-right'})
    }
    const deleteHandler = async (id: string) => {
        setLoading(true)
        await remove(id)
        setLoading(false)
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
