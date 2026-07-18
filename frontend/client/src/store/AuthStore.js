import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";

const useAuthStore = create((set) => ({
    user: null,

    fetchUser: async () => {
        try{
            const response = await AxiosRequest.get('api/profile/')
            set({user:await response.data.data})
        }catch{
            set({user:null})
        }
    },

    logout: async () => {
        try{
            await AxiosRequest.post('api/logout/')
            set({user:null})
        }catch(error){
            console.error('Ошибка выхода:', error)
        }
    }
}))


export default useAuthStore