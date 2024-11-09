import React from 'react'

const Title = () => {
  return (
    <div>
      
    </div>
  )
}
Title.Card = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{children}</h2>
)

export default Title
