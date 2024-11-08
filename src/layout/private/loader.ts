import { redirect } from "react-router-dom"
import { getToken } from "../../helpers/utils"

export const AuthLoader = () => {
    const token = getToken()
    if (token) {
        return
    }
    redirect('/login')
}