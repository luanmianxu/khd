import axios from 'axios'
const defaultRUL = axios.create({
    baseURL: 'http://192.168.31.213:3000'
})
defaultRUL.interceptors.response.use((r) => {
    return r.data
})
export default defaultRUL