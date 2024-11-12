import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Loading from '../components/Loading';
const Main = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-bl from-blue-950 to-blue-400">
      <Loading />
      <div className="w-full h-full grid place-items-center">
        <div className='my-12'>
          <Outlet />
        </div>
        <ToastContainer autoClose={1500} />
      </div>

    </main>
  )
}

export default Main
