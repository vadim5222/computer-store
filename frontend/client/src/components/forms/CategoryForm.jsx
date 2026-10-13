import { useForm } from "react-hook-form"
import AxiosRequest from "../../utils/AxiosRequest"
import Label from "../ui/Label"
import Input from "../ui/Input"

const CategoryForm = ({fetchCategories}) => {

    const {register, handleSubmit, reset} = useForm()

    const createCategory = async(data) => {
        try{
            const response = await AxiosRequest.post('catalog/category/', {
                title:data.title
            })
            console.log(response)
            reset()
            if (fetchCategories){
                fetchCategories()
            }
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <form fetchCategories={fetchCategories} onSubmit={handleSubmit(createCategory)}>
            <Label htmlFor={'tite'}/>
            <Input type={'text'} placeholder={'Title'} {...register('title')}/>
            <button type="submit">Добавить</button>
        </form>
        </>
    )
}

export default CategoryForm