import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";


const useCartItemStore = create((set) => ({
    cartitems: [],
    total_quantity: 0,
    total_price: 0,

    fetchCartItem: async () => {
        try {
            const response = await AxiosRequest.get('cart/cart-item/')
            set({ cartitems: response.data.data, total_quantity: response.data.total_quantity, total_price: response.data.total_price })
            console.log(response)
        } catch {
            set({
                cartitems: [],
                total_quantity: 0,
                total_price: 0,
            })
        }
    },

}))

export default useCartItemStore