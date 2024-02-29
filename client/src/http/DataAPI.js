import {$authHost, $host} from "./index";

export const createMark = async (mark) => {
    console.log(mark)
    const {data} = await $authHost.post('api/data', mark)
    return data
}

export const fetchMarks = async () => {
    const {data} = await $host.get('api/data')
    console.log(data)
    return data
}