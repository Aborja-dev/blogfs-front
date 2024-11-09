import { useContext } from 'react'
import { CreateBlogForm } from '../../components/forms/CreateBlog'
import { SesionContext } from '../../context/Sesion/context'
import { Button } from '@headlessui/react'
import {  useNavigate } from 'react-router-dom'
import clsx from 'clsx'

const CreatePage = () => {
    const { blogs } = useContext(SesionContext)
    const navigate = useNavigate()
    return (
        <div>
            <CreateBlogForm onSubmit={async (data) => { 
                await blogs.add(data)
                navigate(-1)  
                }} />
            <Button className={clsx(`w-full rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={() => navigate(-1)}>
                Regresar
            </Button>
        </div>
    )
}

export default CreatePage
