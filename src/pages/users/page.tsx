import { useEffect, useState } from 'react'
import { useLoading } from '../../infrastructure/hooks/useNotification'
import { useLoaderData } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import { IUser } from '../../domain/schema/users/types'
import Item from './components/Item'
import ButtonComponent from '../../ui/Button'
import Details from './components/Details'

const UsersPage = () => {
    const { success } = useLoading()
    const { users, load, remove } = useUser()
    const [selectedUser, setSelectedUser] = useState<IUser['id'] | null>(null)
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
                            <>
                                <Item 
                                onSelect={() => {
                                    if(user.id === selectedUser) setSelectedUser(null)
                                    else {setSelectedUser(user.id)}
                                }} 
                                key={user.id} item={user} 
                                onDelete={deleteHandler} />
                                {
                                    user.id === selectedUser && <Details user={user} />
                                }
                            </>
                            
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default UsersPage