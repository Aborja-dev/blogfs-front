import React from 'react'
import logo from '../../assets/react.svg'
import { useLoading } from '../hooks/useNotification';
import clsx from 'clsx';


const Loading = ({ children }: { children: React.ReactNode }) => {
    const { isLoading } = useLoading()
    return (
        <>
            <div className={
                clsx('flex-col gap-5 bg-gray-500/30 w-full h-screen flex justify-center items-center overflow-y-hidden absolute z-50', isLoading ? 'visible' : 'hidden')}>
                <div className='absolute flex w-full h-screen justify-center items-center gap-5 flex-col'>
                    <img src={logo} className='w-40 animate-spin duration-300' alt="" />
                    <p className='text-cyan-900 italic font-bold text-4xl' >Loading...</p>
                </div>
            </div>
            <div className={clsx(isLoading ? 'hidden' : 'visible')}>
                {children}
            </div>
        </>
    )
}

export default Loading
