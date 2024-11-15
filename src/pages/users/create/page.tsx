import { useNavigate } from "react-router-dom"
import { useLoading } from "../../../infrastructure/hooks/useNotification"
import { useUser } from "../hooks/useUser"
import { FCreateUser } from "../../../domain/schema/users/formTypes"
import { Button } from "@headlessui/react"
import clsx from "clsx"
import { CreateUserForm } from "../../../infrastructure/components/forms/CreateUser"


const CreateUserPage = () => {
    const {loading} = useLoading()
    const { add } = useUser()
    const navigate = useNavigate()
    const addNewBlog = async (data: FCreateUser) => {
        await loading(async () => {await add({ ...data, passwordHash: data.password })})
        navigate(-1)
    }
    return (
        <div className='max-w-[350px] mx-auto'>
            <CreateUserForm onSubmit={addNewBlog} />
            <Button className={clsx(`w-full  rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={() => navigate(-1)}>
                Regresar
            </Button>
        </div>
    )
}

export default CreateUserPage
