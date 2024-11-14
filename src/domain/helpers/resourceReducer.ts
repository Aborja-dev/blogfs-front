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
            return removeFromList(state, action.payload as string |number)
        case 'UPDATE':
            { const {id, content} = action.payload as {id: string, content: T}
            return updateFromList(state, id, content) }
        case 'CLEAN':
            return []
        default:
            return state
    }
}