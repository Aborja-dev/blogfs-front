import { Input } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

const Field = () => {
  return (
    <div>
      <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
    </div>
  )
}

export default Field
