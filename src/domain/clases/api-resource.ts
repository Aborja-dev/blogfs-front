import axios from "axios"
import { getToken } from "../helpers/utils"

export class ApiResource<T> {
    private url: string
    constructor(url: string) {
        this.url = url
    }
    async getAll(id?: string): Promise<T[]> {
        const url = id ? `${this.url}/${id}` : this.url
        const response = await axios.get(`${url}`, {
            headers: this.configHeaders()
        })
        return await response.data
    }
    async getOne(id: string): Promise<T> {
        const response = await axios.get(`${this.url}/detail/${id}`, {
            headers: this.configHeaders()
        })
        return await response.data
    }
    async create<C>(data: C): Promise<T> {
        const response = await axios.post(this.url, data, {
            headers: this.configHeaders()
        })
        return await response.data
    }
    async remove(id: string | number) {
        await axios.delete(`${this.url}/${id}`, {
            headers: this.configHeaders()
        })
    }
    async update(id: string | number, data: T) {
        await axios.put(`${this.url}/${id}`, data, {
            headers: this.configHeaders()
        })
    }
    protected configHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }
}

export class ApiResourceStub<T> {
    private url: string
    constructor(url: string) {
        this.url = url
    }
    async getAll(id?: string): Promise<T[]> {
        const url = id ? `${this.url}/${id}` : this.url
        const response = await axios.get(`${url}`, {
            headers: this.configHeaders()
        })
        return await response.data
    }
    async getOne(id: string): Promise<T> {
        const response = await axios.get(`${this.url}/detail/${id}`, {
            headers: this.configHeaders()
        })
        return await response.data
    }
    async create<C>(data: C): Promise<T> {
        const response = await axios.post(this.url, data, {
            headers: this.configHeaders()
        })
        return await response.data
    }
    async remove(id: string | number) {
        await axios.delete(`${this.url}/${id}`, {
            headers: this.configHeaders()
        })
    }
    async update(id: string | number, data: T) {
        await axios.put(`${this.url}/${id}`, data, {
            headers: this.configHeaders()
        })
    }
    protected configHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }
}


export class PrivateResource<T> extends ApiResource<T> {
    public token: string
    constructor(url: string) {
        super(url)        
        this.token = getToken() as string
    }
    configHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${this.token}`
        }
    }
}