import { useContext } from 'react'
import { CreateBlogForm } from '../../components/forms/CreateBlog'
import { SesionContext } from '../../context/Sesion/context'
import { Button } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { CreateBlogFormData } from '../../schema/formTypes'
import { useBlogs } from '../../hooks/useBlogs'


const CreatePage = () => {
    const {  loading } = useContext(SesionContext)
    const { add } = useBlogs()
    const [_, setLoading] = loading
    const navigate = useNavigate()
    const addNewBlog = async (data: CreateBlogFormData) => {
        setLoading(true)
        await add({ ...data, likes: 0 })
        setLoading(false)
        navigate(-1)
    }
    return (
        <div className='max-w-[350px] mx-auto'>
            <CreateBlogForm onSubmit={addNewBlog} />
            <Button className={clsx(`w-full  rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={() => navigate(-1)}>
                Regresar
            </Button>
        </div>
    )
}

export default CreatePage
