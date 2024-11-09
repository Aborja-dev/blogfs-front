import React from 'react'

const FormCard = ({title, children}: {
    title: string,
    children: React.ReactNode
}) => {
  return (
      <article className='space-y-6 rounded-xl bg-blue-900/50 p-6 sm:p-10'>
        <FormCard.Title>{title}</FormCard.Title>
        <FormCard.Content>{children}</FormCard.Content>
      </article>
  )
}

FormCard.Content = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex flex-col gap-4'>{children}</div>
    )
}

FormCard.Title = ({children}: {children: React.ReactNode}) => {
    return (
        <h2 className='font-semibold text-white text-2xl'>{children}</h2>
    )
}

export default FormCard