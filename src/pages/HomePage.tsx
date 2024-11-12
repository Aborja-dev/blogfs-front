import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SesionContext } from '../context/Sesion/context'
import { Blog } from '../schema/types'
import { BlogCard } from '../ui/cards/BlogCard'
import { toast } from 'react-toastify'
import bgImage from "../assets/bgCard.png";

const HomePage = () => {
    const { blogs, loading } = useContext(SesionContext)
    const { load, state: _blogs } = blogs
    const [_, setLoading] = loading
    const navigate = useNavigate()
    useEffect(() => {
        const userID = window.localStorage.getItem('userID')
        if (!userID) navigate('/login')
        if (_blogs.length === 0) loadBlogs(userID)
    }, [])
    const loadBlogs = async (userID: string) => {
        setLoading(true)
        await load(userID)
        setLoading(false)
        toast.info('Se han cargado los blogs', {position: 'top-right'})
    }
    return (
        <div className='w-full grid grid-cols-3 gap-4'>
            {
                (_blogs as Blog[]).map(blog => 
                <BlogCard 
                    key={blog.id}  
                    blog={blog}
                    date='2024-01-01'
                    image={bgImage}
                    summary='lorem ipsum'
                />)
            }
        </div>
    )
}

export default HomePage
