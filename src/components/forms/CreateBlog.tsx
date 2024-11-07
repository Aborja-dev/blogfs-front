import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import Loader from '../../assets/loader.svg'
import { CreateBlogFormData } from '../../schema/formTypes'

export function CreateBlogForm({ onSubmit, status }: {
    onSubmit: (data: CreateBlogFormData) => void,
    status: string
}) {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ author, title, url })
    }
    return (
        <div className="w-full max-w-lg px-4">
            <form onSubmit={handleSubmit} >
                <Fieldset className="space-y-6 rounded-xl bg-blue-900/50 p-6 sm:p-10">
                    <Legend className=" font-semibold text-white text-2xl">Crear nuevo blog</Legend>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Titulo</Label>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Autor</Label>
                        <Input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Url</Label>
                        <Input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Button disabled={status == 'LOADING'} type="submit" className={clsx(`w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-white`, status == 'LOADING' && 'pointer-events-none opacity-50')}>
                        <span className="flex items-center justify-center gap-2">
                            {
                                status == 'LOADING' && (
                                    <figure className='w-4'>
                                        <img src={Loader} alt="" />
                                    </figure>
                                )
                            }
                            Crear Nuevo Blog
                        </span>
                    </Button>
                </Fieldset>
            </form>
        </div>
    )
}