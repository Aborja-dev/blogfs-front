import { useEffect } from 'react'
import { useLoading } from '../../infrastructure/hooks/useNotification'
import { useLoaderData } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import { IUser } from '../../domain/schema/users/types'
import Item from './components/Item'
import ButtonComponent from '../../ui/Button'

const UsersPage = () => {
    const { success } = useLoading()
    const { users, load , remove} = useUser()
    const _users = useLoaderData() as IUser[];
    useEffect(() => {
        load(_users)
    }, [])
    const deleteHandler = async (id: string) => {
        await remove(id)
        success({
            message: 'se ha eliminado el usuario'
        })
    }
    return (
        <div className='w-full'>
            <div>
                <ButtonComponent.Link to='create'>
                    Crear nuevo usuario
                </ButtonComponent.Link>
            </div>
            <ul className='space-y-5'>
            {
                (users).map(user => {
                    return (
                        <Item key={user.id} item={user} onDelete={deleteHandler} onEdit={() => {}} />
                    )
                })
            }
            </ul>
        </div>
    )
}
export default UsersPage