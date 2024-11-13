
import React from 'react'
import Header from '../../ui/Header'
import { ToastContainer } from 'react-toastify'
import Loading from '../../infrastructure/components/Loading'
const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='w-full min-h-screen bg-gradient-to-bl from-blue-950 to-blue-400'>
            <Loading>
                <div className='w-full h-full flex flex-col'>
                    <Header />
                    <div className='w-4/5 mx-auto'>
                        {children}
                    </div>
                    <ToastContainer autoClose={1500} />
                </div>
            </Loading>
        </main>
    )
}

export default PrivateLayout
