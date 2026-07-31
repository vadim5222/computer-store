import axios from 'axios'

const baseUrl = 'http://localhost:8000/'

const AxiosRequest = axios.create({
    baseURL: baseUrl,
    timeout:5000,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    withCredentials: true
})

AxiosRequest.interceptors.request.use((config) => {
  config.withCredentials = true
  return config
})


AxiosRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && originalRequest && !originalRequest._isRetry){
      originalRequest._isRetry = true

      try{
        const response = await axios.post(`${baseUrl}api/refresh/`, {}, {
          withCredentials: true
        })
        const newAccessToken = response.data.access_token
        if (newAccessToken){
          localStorage.setItem('token', newAccessToken)
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        }
        return AxiosRequest.request(originalRequest)
      }catch(e){
        console.log('Не авторизован')
        return Promise.reject(e)
      }
    }
    return Promise.reject(error)
  }
)

export default AxiosRequest