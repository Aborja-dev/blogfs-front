import { useState } from 'react';


import { SesionContext } from './context';
import { useLogin } from '../../infrastructure/hooks/useLogin';
import { useResource } from '../../infrastructure/hooks/useResource';
export const ContextSesionProvider = ({ children }: {children: React.ReactNode}) => {
    const sesion = useLogin()
    const blogs = useResource()
    const loading = useState(false)
    return (
        <SesionContext.Provider value={{ sesion, blogs, loading}}>
        { children}
        </SesionContext.Provider>
    )
}