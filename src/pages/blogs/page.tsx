import { useEffect } from 'react'
import { useLoading } from '../../infrastructure/hooks/useNotification'
import { useBlogs } from '../../infrastructure/hooks/useBlogs'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { IBlog } from '../../domain/schema/entities'
import ButtonComponent from '../../ui/Button'
import { BlogCard } from '../../ui/cards/BlogCard'

const BlogsPage = () => {
    const { success } = useLoading()
    const navigate = useNavigate()
    const { blogs, loadBlogs, remove } = useBlogs()
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
    const detailClickHandler = async (id: string) => {
        navigate(`${id}`)
    }
    return (
        <div className='w-full'>
            <div>
                <ButtonComponent.Link to={'create'} className='text-white bg-white/30 max-w-32'>
                    Crear Blog
                </ButtonComponent.Link>
            </div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-4'>
                {
                    (blogs as IBlog[]).map(blog =>
                        <BlogCard
                            date='2023-01-01'
                            image='https://picsum.photos/200/300'
                            summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos?'
                            key={blog.id}
                            blog={blog}
                            onDelete={deleteHandler}
                            onDetailClick={detailClickHandler}

                        />)
                }
            </ul>
        </div>
    )
}
export default BlogsPage