import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";


const useProductStore = create((set) => ({
    products: [],
        fetchProducts: async () => {
            try{
                const response = await AxiosRequest.get('catalog/products/')
                set({products: await response.data})
            }catch{
                set({products: []})
            }
        }
}))

export default useProductStore