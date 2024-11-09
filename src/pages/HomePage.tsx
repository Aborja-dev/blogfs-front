import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SesionContext } from '../context/Sesion/context'
import { Blog } from '../schema/types'
import { BlogCard } from '../ui/cards/BlogCard'


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
                (_blogs as Blog[]).map(blog => 
                <BlogCard 
                    key={blog.id}  
                    blog={blog}
                    date='2024-01-01'
                    image='https://picsum.photos/200/300'
                    summary='lorem ipsum'
                />)
            }
        </div>
    )
}

export default HomePage
