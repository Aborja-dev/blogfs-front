
export class LocalStorage {
    tokenKey: string
    _token!: string
    constructor (tokenKey: string) {
        this.tokenKey = tokenKey
    }
    set token (token: string) {
        console.log(token);
        
        window.localStorage.setItem(this.tokenKey, token)
    } 
    get token (): string |  null {
        const object = window.localStorage.getItem(this.tokenKey) ?? null
        if (!object) return null
        return JSON.parse(object)

    }
    clear = () => {
        window.localStorage.removeItem(this.tokenKey)
    }
}
