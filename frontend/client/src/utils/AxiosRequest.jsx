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


AxiosRequest.interceptors.response.use(response => response, async error =>{
  const originalRequest = error.config
  if (error.response && error.response.status === 401 && !originalRequest._retry){
    originalRequest._retry = true
    try{
      const response = await AxiosRequest.post('api/refresh/', {
        withCredentials:true
      })
      console.log(response)
      return AxiosRequest(originalRequest)
    }catch(e){
      console.log(e)
      window.location = '/login/'
      return Promise.reject(error)
    }
  }
  return Promise.reject(error)
})

export default AxiosRequest