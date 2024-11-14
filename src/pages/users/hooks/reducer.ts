import { removeFromList, updateFromList } from "../../../domain/helpers/utils"
import { IAction } from "../../../domain/schema/types"
import { IUser } from "../../../domain/schema/users/types"

export const UserReducer = (state: IUser[], action: IAction) => {
    switch (action.type) {
        case 'LOAD':
            return action.payload
        case 'ADD':
            console.log([...state, action.payload])
            return [...state, action.payload]
        case 'DELETE':
            return removeFromList(state, action.payload as string |number)
        case 'UPDATE':
            { const {id, content} = action.payload as {id: string, content: IUser}
            return updateFromList(state, id, content) }
        case 'CLEAN':
            return []
        default:
            return state
    }
}