import { useState } from 'react'
import ButtonComponent from '../../../ui/Button'
import FormCard from '../../../ui/cards/FormCard'
import FieldComponent from '../../../ui/Field'
import { FCreateUser } from '../../../domain/schema/users/formTypes'


export function CreateUserForm({ onSubmit }: {
    onSubmit: (data: FCreateUser) => void,
}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, password, username })
    }
    return (
        <FormCard title="Crear nuevo usuario">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
                <FieldComponent label='Nombre' value={name} setValue={setName} />
                <FieldComponent label='Usuario' value={password} setValue={setPassword} />
                <FieldComponent label='Contraseña' value={username} setValue={setUsername} />
                <ButtonComponent onClick={() => {}} type="submit">
                    Crear Nuevo Usuario
                </ButtonComponent>
            </form>
        </FormCard>
    )
}