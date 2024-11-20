import { ToastContainer } from 'react-toastify';
import Loading from '../infrastructure/components/Loading';


const Main = ({children}: {children?: React.ReactNode}) => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-bl from-blue-950 to-blue-400">
      <Loading>
        <div className="w-full h-full grid place-items-center">
          <div className='my-12'>
          {children}
          </div>
          <ToastContainer autoClose={1500} />
        </div>
      </Loading>

    </main>
  )
}

export default Main
