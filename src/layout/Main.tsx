import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-bl from-blue-950 to-blue-400">
        
        <div className="w-full h-full grid place-items-center">
            <Outlet />
        </div>
    </main>
  )
}

export default Main
