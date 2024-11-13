
import { Button } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import { useLoading } from '../../infrastructure/hooks/useNotification'
import { useBlogs } from '../../infrastructure/hooks/useBlogs'
import { FCreateBlog } from '../../domain/schema/formTypes'
import { CreateBlogForm } from '../../infrastructure/components/forms/CreateBlog'



const CreatePage = () => {
    const {loading} = useLoading()
    const { add } = useBlogs()
    const navigate = useNavigate()
    const addNewBlog = async (data: FCreateBlog) => {
        await loading(async () => {await add({ ...data, likes: 0 })})
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
