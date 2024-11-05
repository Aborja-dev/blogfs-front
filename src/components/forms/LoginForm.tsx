import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
interface SubmitFormData {
    username: string
    password: string
}
export function LoginForm({ onSubmit, status }: { 
    onSubmit: (data: SubmitFormData) => void,
    status: string
 }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ username, password })
    }
    return (
        <div className="w-full max-w-lg px-4">
            <form onSubmit={handleSubmit} >
                <Fieldset className="space-y-6 rounded-xl bg-blue-900/50 p-6 sm:p-10">
                    <Legend className=" font-semibold text-white text-2xl">Log in</Legend>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Username</Label>
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Password</Label>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Button disabled={status == 'LOADING'} type="submit" className={clsx(`w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-white`, status == 'LOADING' && 'pointer-events-none opacity-50')}>Log in</Button>
                </Fieldset>
            </form>
        </div>
    )
}