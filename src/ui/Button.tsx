/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComponent = ({children, onClick, status = 'DEFAULT', ...props}: {
    children: React.ReactNode
    onClick: () => void
    status?: string
    [key: string]: any
}) => {
    return (
        <Button 
        {...props}
        onClick={onClick}
        className={clsx(
            `w-full rounded-lg  py-1.5 px-3 text-sm/6 text-white`, 
            status == 'LOADING' && 'pointer-events-none opacity-50',
            'hover:brightness-125',
            props.className ?? 'text-gray-500 bg-white/5'
            )}>
            {children}
        </Button>
    )
}

ButtonComponent.Outline = ({children, onClick, status = 'DEFAULT', ...props}: {
    children: React.ReactNode
    onClick: () => void
    status?: string
    [key: string]: any
}) => {
    return (
        <Button 
        {...props}
        onClick={onClick}
        className={clsx(
            `w-full rounded-lg  py-1.5 px-3 text-sm/6 `, 
            status == 'LOADING' && 'pointer-events-none opacity-50',
            props.className ?? 'text-gray-500'
            )}>
            {children}
        </Button>
    )
}

ButtonComponent.Link = ({children, to, ...props}: {
    children: React.ReactNode
    to: string
    [key: string]: any
}) => {
    return (
        <Link to={to} onClick={props.onClick}
        {...props}
        className={clsx(
            `w-full rounded-lg  py-1.5 px-3 text-sm/6 `, 
            props.className ?? 'text-white bg-white/5',
            'hover:bg-gray-600'
            )}>
            {children}
        </Link>
    )
}

export default ButtonComponent
