/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Label, Field } from '@headlessui/react'
import clsx from 'clsx'

const FieldComponent = ({value, label, setValue, ...props}: 
    {   value: string, 
        label: string, 
        setValue: (value: string) => void,
        [key: string]: any
        
    }) => {
    return (
        <>
        <Field>
            <Label className="text-sm/6 font-medium text-white">{label}</Label>
            <Input
                {...props}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={clsx(
                    'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
            />
        </Field>
        </>
    )
}

export default FieldComponent
