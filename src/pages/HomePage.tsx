import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../components/ui/Blogcard'
import { useResource } from '../hooks/useResource'
import { SesionContext } from '../context/Sesion/context'
import { Blog } from '../schema/types'

const HomePage = () => {
    const { blogs } = useContext(SesionContext)
    const { load, state: _blogs } = blogs
    const navigate = useNavigate()
    useEffect(() => {
        
        const userID = window.localStorage.getItem('userID')
        if (!userID) navigate('/login')
        if (_blogs.length === 0) load(userID)
    }, [])

    return (
        <div className='w-full grid grid-cols-3 gap-4'>
            {
                (_blogs as Blog[]).map(blog => <BlogCard key={blog.id} {...blog} />)
            }
        </div>
    )
}

export default HomePage
