import React, { useContext } from 'react'
import logo from './../assets/react.svg'
import { SesionContext } from '../context/Sesion/context'
const Loading = () => {
    const [loading] = useContext(SesionContext).loading
    if (!loading) return null
    return (
        <div className='flex-col gap-5 bg-gray-500/30 w-full h-screen flex justify-center items-center overflow-hidden absolute z-50'>
            <img src={logo} className='w-40 animate-spin ' alt="" />
            <p className='text-cyan-900 italic font-bold text-4xl' >Loading...</p>
        </div>
    )
}

export default Loading
