import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";
import {useNavigate} from 'react-router-dom'



const useAuthStore = create((set) => ({
  user: null,

    fetchUser: async () => {
        try{
            const response = await AxiosRequest.get('users/profile/')
            set({user:await response.data.data})
        }catch{
            set({user:null})
        }
    },

  logout: async (navigate) => {
        try{
            await AxiosRequest.post('users/logout/')
          set({ user: null })
          navigate('/login                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ')
        }catch(error){
            console.error('Ошибка выхода:', error)
        }
    }
}))


export default useAuthStore