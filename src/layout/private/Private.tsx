
import React from 'react'
import Header from '../../ui/Header'
import Loading from '../../components/Loading'
import { ToastContainer } from 'react-toastify'
const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='w-full min-h-screen bg-gradient-to-bl from-blue-950 to-blue-400'>
            <div className='w-full h-full flex flex-col'>
                <Loading>
                    <Header />
                    <div className='w-4/5 mx-auto'>
                        {children}
                    </div>
                    <ToastContainer autoClose={1500} />
                </Loading>
            </div>
        </main>
    )
}

export default PrivateLayout
