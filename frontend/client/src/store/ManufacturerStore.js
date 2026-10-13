import { create } from "zustand";
import AxiosRequest from "../utils/AxiosRequest";


const useManufacturerStore = create((set) => ({
    manufacturers: [],

        fetchManufacturer: async () => {
            try{
                const response = await AxiosRequest.get('catalog/manufacturer/')
                set({manufacturers: await response.data.data})
            }catch{
                set({manufacturers: []})
            }
        }
}))

export default useManufacturerStore