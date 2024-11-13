import React, { useReducer, useState } from 'react'
import { blogsReducer } from '../../domain/reducer/resourceReducer'
import { GlobalContext } from './context'
import { IAction } from '../../domain/schema/types'

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(blogsReducer, [] as never)
    const [loading, setLoading] = useState<boolean>(false)
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
                value: {} as any,
                set: () => {}
            }
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
