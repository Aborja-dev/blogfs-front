import clsx from 'clsx'
import React from 'react'

const Text = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <p className={clsx('ext-sm text-gray-600 mb-4', className)}>
      {children}
    </p>
  )
}

export default Text
