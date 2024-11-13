import React from 'react'
import logo from '../../assets/react.svg'
import { useLoading } from '../hooks/useNotification';


const Loading = ({ children }: { children: React.ReactNode }) => {
    const { isLoading } = useLoading()
    console.log(isLoading);
    
    if (!isLoading) return (<>{children}</>)
    return (
        <div className='flex-col gap-5 bg-gray-500/30 w-full h-screen flex justify-center items-center overflow-y-hidden absolute z-50'>
            <div className='absolute flex w-full h-screen justify-center items-center gap-5 flex-col'>
                <img src={logo} className='w-40 animate-spin duration-300' alt="" />
                <p className='text-cyan-900 italic font-bold text-4xl' >Loading...</p>
            </div>
            {children}
        </div>
    )
}

export default Loading
