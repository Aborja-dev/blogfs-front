import { useLogin } from '../../hooks/useLogin';
import { useResource } from '../../hooks/useResource';
import { SesionContext } from './context';
export const ContextSesionProvider = ({ children }: {children: React.ReactNode}) => {
    const sesion = useLogin()
    const blogs = useResource()
    return (
        <SesionContext.Provider value={{ sesion, blogs}}>
        { children}
        </SesionContext.Provider>
    )
}