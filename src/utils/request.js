import axios from 'axios'
const defaultRUL = axios.create({
    baseURL: 'http://192.168.31.213:3000'
})
// 请求拦截器
defaultRUL.interceptors.request.use(r => {

    return r
})
// 响应拦截器
defaultRUL.interceptors.response.use((r) => {

    return r.data
})
export default defaultRUL