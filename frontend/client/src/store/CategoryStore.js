import { create } from 'zustand'
import AxiosRequest from '../utils/AxiosRequest'

const useCategoryStore = create((set) => ({
    categories: [],

        fetchCategories: async () => {
            try{
                const response = await AxiosRequest.get('/catalog/category/')
                set({categories: await response.data.data})
            }catch{
                set({categories: []})
            }
        }
}))

export default useCategoryStore