import { useContext, useState } from "react"
import { GlobalContext } from "../context/global/context"
import { SesionStateType } from "../../domain/schema/types"
import { Login } from "../../service/api-gateway"
import { LocalStorage } from "../../domain/clases/LocalStorage"

export const useSesion = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error('no se puede acceder al contexto')
    const Token = new LocalStorage('token')
    const UserId = new LocalStorage('userID')
    const {set} = context.sesion
    const [state, setState] = useState<SesionStateType>('DEFAULT')
    const login = async (data: { username: string; password: string }) => {
        const sesion = await Login(data)
        set(sesion)
        const { token, blogs, id } = sesion
        setState('LOGGED')
        saveInfo(token, id.toString())
        return blogs
    }
    const saveInfo = (token: string, userId: string) => {
        Token.token = token
        UserId.token = userId
    }
    const logout = () => {
        set(null)
        setState('DEFAULT')
        Token.clear()
        UserId.clear()
    }

    return {
        state,
        login,
        logout
    }
}