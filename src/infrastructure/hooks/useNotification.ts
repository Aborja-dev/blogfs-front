import { useContext } from "react"
import { toast } from "react-toastify"
import { GlobalContext } from "../../context/global/context"
import { delay } from "../../domain/helpers/utils"



export const useLoading = () => {
    const {value, set} = useContext(GlobalContext).loading
    const success = ({message}: {message: string}) => {
        toast.success(message, {position: 'top-right'})
    }
    const loading = async (cb: () => void) => {
        set(true)
        await delay(2000)
        cb()
        set(false)
    }
    const error = ({message}: {message: string}) => {
        toast.error(message, {position: 'top-right'})
    }
    return {
        isLoading: value,
        success,
        loading,
        error
    }
}