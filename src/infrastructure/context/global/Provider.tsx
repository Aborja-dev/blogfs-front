import { useReducer, useState } from "react"
import { blogsReducer } from "../../../domain/reducer/resourceReducer"
import { IAction } from "../../../domain/schema/types"
import { GlobalContext } from "./context"
import { ISesion } from "../../../domain/schema/entities"


const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(blogsReducer, [] as never)
    const [loading, setLoading] = useState<boolean>(false)
    const [sesion, setSesion] = useState<ISesion | null>(null)   
    return (
        <GlobalContext.Provider value={{
            blogs: {
                value: state,
                set: (action) => { dispatch(action as IAction) }
            },
            loading: {
                value: loading,
                set: (newValue) => { 
                    setLoading(newValue as boolean) 
                }
            },
            sesion: {
                value: sesion,
                set: (value) => {setSesion(value as ISesion)}
            }
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
