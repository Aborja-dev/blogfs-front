import { useEffect, useState } from "react";
import { Login } from "../service/api-gateway";
type stateType = 'DEFAULT' | 'LOADING' | 'SUCCESS' | 'ERROR' | 'EXPIRED' | 'LOGGED'
export const useLogin = () => {
    useEffect(() => checkSesion(), [])
    const [state, setState] = useState<stateType>('DEFAULT')
    const login = async(data: { username: string; password: string }) => {
        const {token, blogs} = await Login(data)
        setState('LOADING')
        setTimeout(async () => {
            setState('LOGGED')
            saveToken(token)
        }, 1000);
        return blogs
    }
    const checkSesion = () => {
        const token = window.localStorage.getItem('token')
        if (token) {
            setState('LOGGED')
        }
        else {
            setState('DEFAULT')
        }
    }
    const logout = () => {
        window.localStorage.removeItem('token')
        setState('DEFAULT')
    }
    const saveToken = (token: string) => {
        window.localStorage.setItem('token', token)
    }
    return { login, state, logout }
}