import React, { useReducer } from 'react'
import { blogsReducer } from '../../domain/reducer/resourceReducer'
import { GlobalContext } from './context'
import { IAction } from '../../domain/schema/types'

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(blogsReducer, [] as never)
    return (
        <GlobalContext.Provider value={{
            blogs: {
                value: state,
                set: (action) => { dispatch(action as IAction) }
            },
            loading: {
                value: false,
                set: () => {}
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
