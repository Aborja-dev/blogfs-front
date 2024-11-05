import { useState } from "react";
const STATES = ['DEFAULT', 'LOADING', 'SUCCESS', 'ERROR']
export const useLogin = () => {
    const [state, setState] = useState(STATES[0])
    const login = (data: { username: string; password: string }) => {
        setState(STATES[1])
        setTimeout(() => {
            setState(STATES[2])
            console.log(data);
            
        }, 1000);
    }
    return { login, state }
}