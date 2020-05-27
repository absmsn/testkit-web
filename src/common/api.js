import axios from 'axios'
import { getStorage } from './localstorage'

const request = axios.create({
    baseURL: 'http://localhost:8000'
})

request.interceptors.request.use((config) => {
    if (getStorage('token')) {
        config.headers['Authorization'] = `Token ${getToken('token')}`
    }
    return config
}, (error) => Promise.reject(error))

export default request;