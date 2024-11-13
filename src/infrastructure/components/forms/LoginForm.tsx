import { useState } from 'react'
import { FLogin } from '../../../domain/schema/formTypes'
import ButtonComponent from '../../../ui/Button'
import FormCard from '../../../ui/cards/FormCard'
import FieldComponent from '../../../ui/Field'

export function LoginForm({ onSubmit, status }: {
    onSubmit: (data: FLogin) => void,
    status: string
}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ username, password })
    }
    return (
        <FormCard title="Log in">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
                <FieldComponent value={username} label="Username" setValue={setUsername} />
                <FieldComponent value={password} label="Password" setValue={setPassword} />
                <ButtonComponent status={status} onClick={() => onSubmit({ username, password })}>
                    <span className="flex items-center justify-center gap-2">
                        Log in
                    </span>
                </ButtonComponent>
            </form>
        </FormCard>
    )
}