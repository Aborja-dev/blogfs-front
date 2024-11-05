import React from 'react'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen bg-gradient-to-bl from-blue-950 to-blue-400">
        <div className="w-full h-full flex justify-center items-center">
            {children}
        </div>
    </main>
  )
}

export default Main
