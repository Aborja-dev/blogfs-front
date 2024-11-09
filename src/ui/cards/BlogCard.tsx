import { useContext } from 'react'
//import { Transition } from '@headlessui/react'
import { Blog } from '../../schema/types'
import { SesionContext } from '../../context/Sesion/context'
import Title from '../typhography/Title'
import Text from '../typhography/Text'
import ButtonComponent from '../Button'

export function BlogCard({
    blog,
    summary,
    date,
    image,
}: {
    blog: Blog,
    summary: string,
    date: string,
    image: string,
}) {
    const { blogs } = useContext(SesionContext)
    const { remove, update } = blogs
    const { title, author } = blog
    // const [isHovered, setIsHovered] = useState(false)
    const likeHandler = async () => {
        const data = { ...blog, likes: blog.likes + 1 }
        await update(blog.id, data)
    }
    const deleteHandler = async () => {
        await remove(blog.id)
    }
    return (
        <div
            className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        >
            <BlogCard.Image src={image} alt={title} />
            <div className="p-6">
                <Title.Card>{title}</Title.Card>
                <Text>{author}</Text>
                <Text>{summary}</Text>
                <div className="flex justify-between items-center">
                    <Text className='text-gray-500'>Sent on: {date}</Text>
                    <ButtonComponent.Outline
                        className='text-blue-500'
                        onClick={likeHandler}
                    >
                        Like
                    </ButtonComponent.Outline>
                    {blog.likes}
                </div>
            </div>
            <div className="p-6 bg-gray-100 flex items-center">
                <ButtonComponent
                    onClick={deleteHandler}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
                >
                    Delete
                </ButtonComponent>
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

BlogCard.Image = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative h-28">
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
        />
    </div>
)

