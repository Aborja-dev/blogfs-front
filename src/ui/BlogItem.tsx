import React from 'react'
import { IBlog } from '../domain/schema/entities'
import { DeleteAction, LikeAction } from '../domain/schema/blogActions'
import ButtonComponent from './Button'

const BlogItem = ({ blog, onDelete, onLike }: {
    blog: IBlog
    onDelete: DeleteAction,
    onLike: LikeAction
}) => {
    return (
        <li className='w-full grid grid-cols-4 items-center gap-4 text-white'>
            <p>{blog.title}</p>
            <p>
                <ButtonComponent
                    className='max-w-16 bg-gray-500/30 mr-4'
                    onClick={() => onLike(blog.id, { ...blog, likes: blog.likes + 1 })}
                >
                    Like
                </ButtonComponent>
                {blog.likes}
            </p>
            <ButtonComponent
                className='max-w-32 bg-red-500/70'
                onClick={() => onDelete(blog.id)}
            >
                Eliminar
            </ButtonComponent>
        </li>
    )
}

export default BlogItem
