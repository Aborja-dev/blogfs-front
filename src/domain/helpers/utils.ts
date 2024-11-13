export const removeFromList = <T extends { id: number | string }>(list:T[], id: number | string): T[] | null => {
    const index = list.findIndex(el => el.id === id)
    if (index === -1) return null
    return list.filter((_, i) => i !== index )
}

export const updateFromList = <T extends { id: number | string }>(list: T[], id: number | string, data: T): T[] | null => {
    const index = list.findIndex(el => el.id === id);
    if (index === -1) {
        // Retorna null si no se encuentra el elemento
        return null;
    }
    const newList = [...list];
    newList[index] = { ...newList[index], ...data };
    return newList;
}
export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))