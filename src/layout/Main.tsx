import React from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-bl from-blue-950 to-blue-400">
        <header className='w-full h-20 mb-8 bg-blue-700 shadow-md'></header>
        <div className="w-full h-full grid place-items-center">
            {children}
        </div>
    </main>
  )
}

export default Main
