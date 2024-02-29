import {$authHost, $host} from "./index";
import   {jwtDecode} from 'jwt-decode';

export const registration = async (login, passwd) => {
    const {data} = await $host.post('api/auth/registration', {login, passwd, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, passwd) => {
    const {data} = await $host.post('api/auth/login', {login, passwd})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/auth/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

