import { useLoaderData, useNavigate } from 'react-router-dom'
import { IUser } from '../../../domain/schema/users/types'
import { useUser } from '../hooks/useUser'
import { Button } from '@headlessui/react'
import { CreateUserForm } from '../../../infrastructure/components/forms/CreateUser'
import clsx from 'clsx'
import { FCreateUser } from '../../../domain/schema/users/formTypes'

const EditPage = () => {
  const { edit } = useUser()
  const user = useLoaderData() as IUser
  const navigate = useNavigate()
  const editUser = async (data: FCreateUser) => {
      await edit(user.id, {...data, passwordHash: data.password, id: user.id})
      navigate(-1)
  }
  return (
      <div className='max-w-[350px] mx-auto'>
          <CreateUserForm defaultValue={user} title='Editar Usuario' onSubmit={(data: FCreateUser) => {editUser({ ...user, ...data })}} />
          <Button className={clsx(`w-full  rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={() => navigate(-1)}>
              Regresar
          </Button>
      </div>
  )
}


export default EditPage
