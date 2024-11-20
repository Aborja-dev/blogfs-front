/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAction } from "../schema/types"
import { removeFromList, updateFromList } from "./utils"

export const resource = <T>(state: T[], action: IAction) => {
    switch (action.type) {
        case 'LOAD':
            return action.payload
        case 'ADD':
            console.log([...state, action.payload])
            return [...state, action.payload]
        case 'DELETE':
            return removeFromList(state as any, action.payload as string |number)
        case 'UPDATE':
            { const {id, content} = action.payload as {id: string, content: T}
            return updateFromList(state as any, id, content as any) }
        case 'CLEAN':
            return []
        default:
            return state
    }
}