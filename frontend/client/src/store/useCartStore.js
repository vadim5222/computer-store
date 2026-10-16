import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";

const useCartStore = create((set) => ({
    cart: [],

    fetchCart: async () => {
        try{
            const response = await AxiosRequest.get('cart/cart/')
            set({cart: response.data.data})
        }catch{
            set({cart: []})
        }
    }
}))

export default useCartStore