import React, { useContext } from 'react'
import ButtonComponent from './Button'
import { SesionContext } from '../context/Sesion/context'

const Header = () => {
    const sesion = useContext(SesionContext)
  return (
    <header className='w-full gap-4 flex justify-end text-center items-center px-4 h-20 mb-8 bg-blue-700 shadow-md'>
                <ButtonComponent.Link to={'/create'} className='text-white bg-white/30 max-w-32'>
                    Crear Blog
                </ButtonComponent.Link>

                <ButtonComponent.Link to={'/login'}  className='text-white bg-white/30 max-w-32' onClick={sesion.logout}>
                    Logout
                </ButtonComponent.Link>
            </header>
  )
}

export default Header