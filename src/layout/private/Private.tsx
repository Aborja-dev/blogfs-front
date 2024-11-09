
import React from 'react'
import ButtonComponent from '../../ui/Button'
import Header from '../../ui/Header'
const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-full flex flex-col'>
            <Header />
            {children}
        </div>
    )
}

export default PrivateLayout
