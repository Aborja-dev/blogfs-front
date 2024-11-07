import { useState } from 'react'

//import { Transition } from '@headlessui/react'
import { Blog } from '../../schema/types'
import { deleteBlog, updateVotes } from '../../service/api-gateway'

export default function BlogCard({ author, title, likes, id, url }: Blog) {
    const [_likes, setLikes] = useState(likes)
    // const [isHovered, setIsHovered] = useState(false)
    const likeHandler = async () => {
        await updateVotes({author, title, likes: _likes, id, url}).then(res => setLikes(res.likes))
    }
    const deleteHandler = async () => {
        await deleteBlog(id)
    }
    return (
        <div
            className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-28">
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Postcard image"
                        className="w-full h-full object-cover"
                    />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 mb-4">{author}</p>
                <p className="text-sm text-gray-600 mb-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Sent on: July 15, 2023</p>
                    <button
                        onClick={likeHandler}
                        className="px-4 py-2  text-blue-600 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                    >
                        Like
                    </button>
                    {_likes}
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                    >
                        Send Reply
                    </button>
                </div>
            </div>
            <div className="p-6 bg-gray-100">
                <button
                    onClick={deleteHandler}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
                >
                    Delete
                </button>
            </div>{/* 
            <Transition
                show={isHovered}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">View Details</p>
                </div>
            </Transition> */}
        </div>
    )
}