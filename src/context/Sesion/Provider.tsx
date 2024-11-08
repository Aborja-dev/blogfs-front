import { useLogin } from '../../hooks/useLogin';
import { SesionContext } from './context';
export const ContextSesionProvider = ({ children }: {children: React.ReactNode}) => {
    const sesion = useLogin()
    return (
        <SesionContext.Provider value={sesion}>
        { children}
        </SesionContext.Provider>
    )
}