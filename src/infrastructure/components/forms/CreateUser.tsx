import { useState } from 'react'
import ButtonComponent from '../../../ui/Button'
import FormCard from '../../../ui/cards/FormCard'
import FieldComponent from '../../../ui/Field'
import { FCreateUser } from '../../../domain/schema/users/formTypes'
import { IUser } from '../../../domain/schema/users/types'


export function CreateUserForm({ onSubmit, defaultValue, title }: {
    onSubmit: (data: FCreateUser) => void,
    defaultValue?: IUser,
    title: string
}) {
    const [name, setName] = useState( defaultValue?.name ?? '')
    const [password, setPassword] = useState(defaultValue?.passwordHash ?? '')
    const [username, setUsername] = useState(defaultValue?.username ?? '')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, password, username })
    }
    return (
        <FormCard title={title}>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
                <FieldComponent defaultValue={defaultValue?.name} label='Nombre' value={name} setValue={setName} />
                <FieldComponent defaultValue={defaultValue?.username} label='Usuario' value={password} setValue={setPassword} />
                <FieldComponent defaultValue={defaultValue?.passwordHash} label='Contraseña' value={username} setValue={setUsername} />
                <ButtonComponent onClick={() => {}} type="submit">
                    {defaultValue ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
                </ButtonComponent>
            </form>
        </FormCard>
    )
}