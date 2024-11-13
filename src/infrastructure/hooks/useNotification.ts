import { useContext } from "react"
import { toast } from "react-toastify"
import { delay } from "../../domain/helpers/utils"
import { GlobalContext } from "../context/global/context"
let isRunning = false;
export const useLoading = () => {
    const { value, set } = useContext(GlobalContext).loading
    const success = ({ message }: { message: string }) => {
        toast.success(message, { position: 'top-right' })
    }
    const loading = async (cb: () => Promise<void>) => {
        if (isRunning) return; // Evita ejecutar si ya está corriendo
        isRunning = true;
        set(true)
        try {
            //await delay(2000); // Simulación de un tiempo de carga
            await cb();
            return true
        } catch (error) {
            console.error("Error en la función de carga:", error);
        } finally {
            set(false); // Desactiva el estado de carga
            isRunning = false;
        }
    }
    const error = ({ message }: { message: string }) => {
        toast.error(message, { position: 'top-right' })
    }
    return {
        isLoading: value,
        success,
        loading,
        error
    }
}