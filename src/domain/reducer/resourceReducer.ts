import { removeFromList, updateFromList } from "../helpers/utils";
import { IBlog } from "../schema/entities";
import { IAction } from "../schema/types";

export const blogsReducer = (state: IBlog[], action: IAction) => {
    switch (action.type) {
        case 'LOAD':
            return action.payload
        case 'ADD':
            console.log([...state, action.payload])
            return [...state, action.payload]
        case 'DELETE':
            return removeFromList(state, action.payload as string |number)
        case 'UPDATE':
            { const {id, content} = action.payload as {id: string, content: IBlog}
            return updateFromList(state, id, content) }
        case 'CLEAN':
            return []
        default:
            return state
    }
}