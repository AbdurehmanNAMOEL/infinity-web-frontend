import axios from 'axios'

const BASE_URL="http://localhost:3000"

export default axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
})

export const imageUploadAxios= axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type':'multipart/form-data'},
    withCredentials:true
})



