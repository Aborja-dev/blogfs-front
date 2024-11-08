import { Button } from '@headlessui/react'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SesionContext } from '../../context/Sesion/context'

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    const sesion = useContext(SesionContext)
    return (
        <div>
            <header className='w-full gap-4 flex justify-end items-center px-4 h-20 mb-8 bg-blue-700 shadow-md'>
                <Button className={clsx(`w-full rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={sesion.logout}>
                    <Link to={'/create'}>Crear Blog</Link>
                </Button>

                <Button className={clsx(`w-full rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={sesion.logout}>
                    <Link to={'/login'}>Logout</Link>
                </Button>
            </header>
            {children}
        </div>
    )
}

export default PrivateLayout
