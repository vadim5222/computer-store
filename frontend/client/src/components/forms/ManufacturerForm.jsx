import {useForm} from 'react-hook-form'
import AxiosRequest from '../../utils/AxiosRequest'
import Label from '../ui/Label'
import Input from '../ui/Input'
import { useState } from 'react'


const ManufacturerForm = ({fetchManufacturer}) => {
    const {register, handleSubmit, reset} = useForm()
    const [selectedImage, setSelectedImage] = useState(null)

    const createManufacturer = async(data) => {
        try{
            const formData = new FormData()
            formData.append('title', data.title)
            formData.append('description', data.description)
            formData.append('image', selectedImage)
            const response = await AxiosRequest.post('catalog/manufacturer/', 
                formData
            )
            console.log(response)
            setSelectedImage(null)
            reset()
            if (fetchManufacturer){
                fetchManufacturer()
            }
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <form fetchManufacturer={fetchManufacturer} onSubmit={handleSubmit(createManufacturer)}>
            <Label htmlFor={'title'} value={'Title'}/>
            <Input type={'text'} placeholder={'title'} {...register('title')}/>

            <Label htmlFor={'description'} value={'Description'}/>
            <Input type={'text'} placeholder={'text'} {...register('description')}/>

            <Label htmlFor={'image'} value={'image'}/>
            <Input type={'file'} onChange={(e) => setSelectedImage(e.target.files[0])}/>

            <button type='submit'>Добавить</button>
        </form>
        </>
    )
}

export default ManufacturerForm