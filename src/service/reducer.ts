export type ActionType = 'LOAD' | 'ADD' | 'CLEAN' | 'ERASE' | 'VOTE' | 'UPDATE' | 'DELETE'

export const ResourceReducer = <T>(state: T[], action: {type: ActionType | string, payload: any}) => {
    switch (action.type  as ActionType) {
        case 'LOAD':
            return action.payload
        case 'ADD':
            return [...state, action.payload]
        case 'DELETE':
            return removeFromList(state, action.payload)
        case 'UPDATE':
            return updateFromList(state, action.payload.id, action.payload.content)
        case 'CLEAN':
            return []

        default:
            return state
    }
}

const removeFromList = <T>(list:T[], id: number | string): T[] | null => {
    const index = list.findIndex(el => el.id === id)
    if (index === -1) return null
    return list.filter((el, i) => i !== index )
}

const updateFromList = <T extends { id: number | string }>(list: T[], id: number | string, data: T): T[] | null => {
    const index = list.findIndex(el => el.id === id);
    if (index === -1) {
        // Retorna null si no se encuentra el elemento
        return null;
    }
    const newList = [...list];
    newList[index] = { ...newList[index], ...data };
    return newList;
}