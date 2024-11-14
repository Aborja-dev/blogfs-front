import ButtonComponent from './Button'
import { useSesion } from '../infrastructure/hooks/useSesion'

const Header = () => {
  const { logout } = useSesion()
  return (
    <header className='w-full gap-4 flex justify-between text-center items-center px-4 h-20 mb-8 bg-blue-700 shadow-md'>
      <div className='flex justify-end w-1/4 text-center items-center gap-4'>
        <ButtonComponent.Link to={'blogs'} className='text-white bg-white/30 max-w-32'>
          Blogs
        </ButtonComponent.Link>
        <ButtonComponent.Link to={'users'} className='text-white bg-white/30 max-w-32'>
          Usuarios
        </ButtonComponent.Link>
      </div >
      <div className='flex justify-end w-1/4 text-center items-center gap-4'>
        <ButtonComponent.Link to={'/create'} className='text-white bg-white/30 max-w-32'>
          Crear Blog
        </ButtonComponent.Link>
        <ButtonComponent.Link to={'/login'} className='text-white bg-white/30 max-w-32' onClick={logout}>
          Logout
        </ButtonComponent.Link>
      </div>
    </header>
  )
}

export default Header
