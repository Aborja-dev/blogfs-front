import { useState } from 'react'
import { CreateBlogFormData } from '../../schema/formTypes'
import FormCard from '../../ui/cards/FormCard'
import FieldComponent from '../../ui/Field'
import ButtonComponent from '../../ui/Button'

export function CreateBlogForm({ onSubmit }: {
    onSubmit: (data: CreateBlogFormData) => void,
}) {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ author, title, url })
    }
    return (
        <FormCard title="Crear nuevo blog">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
                <FieldComponent label='Titulo' value={title} setValue={setTitle} />
                <FieldComponent label='Autor' value={author} setValue={setAuthor} />
                <FieldComponent label='Url' value={url} setValue={setUrl} />
                <ButtonComponent onClick={() => {}} type="submit">
                    Crear Nuevo Blog
                </ButtonComponent>
            </form>
        </FormCard>
    )
}