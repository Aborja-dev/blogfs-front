import { redirect } from "react-router-dom"
import { getToken } from "../../domain/helpers/utils"

export const AuthLoader = () => {
    const token = getToken()
    if (token) return {} 
    return redirect('/login')
}