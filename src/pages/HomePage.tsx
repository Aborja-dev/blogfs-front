import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Blog } from '../schema/types'
import { getBlogs } from '../service/api-gateway'
import BlogCard from '../components/ui/Blogcard'

const HomePage = () => {
    const [blogs, setBlogs] = React.useState<Blog[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (!token) navigate('/login')
        fetchBlogs()
    }, [])
    const fetchBlogs = async () => {
        const userID = window.localStorage.getItem('userID')?.toString()
        console.log(userID);
        const blogs = await getBlogs(userID!)
        setBlogs(blogs)
    }
    return (
        <div className='w-full grid grid-cols-3 gap-4'>
            {
                blogs.map(blog => <BlogCard key={blog.id} {...blog} />)
            }
        </div>
    )
}

export default HomePage
