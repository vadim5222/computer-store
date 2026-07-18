import { useForm } from "react-hook-form"
import AxiosRequest from "../../utils/AxiosRequest"
import Label from "../Label"
import Input from "../Input"
import { useEffect } from "react"

const CategoryForm = ({onCategoryAdded}) => {

    const {register, handleSubmit, reset} = useForm()

    const createCategory = async(data) => {
        try{
            const response = await AxiosRequest.post('api/category/', {
                title:data.title
            })
            console.log(response)
            reset()
            if (onCategoryAdded){
                onCategoryAdded()
            }
        }catch(e){
            console.log(e)
        }
    }

    


    return(
        <>
        <form onCategoryAdded={onCategoryAdded} onSubmit={handleSubmit(createCategory)}>
            <Label htmlFor={'tite'}/>
            <Input type={'text'} placeholder={'Title'} {...register('title')}/>
            <button type="submit">Добавить</button>
        </form>
        </>
    )
}

export default CategoryForm