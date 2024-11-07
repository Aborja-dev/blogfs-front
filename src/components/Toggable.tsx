import { Button } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

const Toggable = ({children}: { children: React.ReactNode} ) => {
const[ open, setOpen ] = React.useState<boolean>(false)
  return (
    <div>
        { open && children}
        <Button className={clsx(`w-full rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)}
        onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'}</Button>
    </div>
  )
}

export default Toggable
