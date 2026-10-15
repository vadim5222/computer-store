import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";


const useCartItemStore = create((set) => ({
    cartitems: [],
    viewBasket: false,

    fetchCartItem: async () => {
        try {
            const response = await AxiosRequest.get('cart/cart-item/')
            set({ cartitems: await response.data.data })
            console.log(response)
        } catch {
            set({cartitems: []})
        }
    },

    setViewBasket: () => {
        set((state) => ({viewBasket: !state.viewBasket}))
    }
}))

export default useCartItemStore