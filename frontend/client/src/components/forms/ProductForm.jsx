import {useForm} from 'react-hook-form'
import AxiosRequest from '../../utils/AxiosRequest' 
import { useState, useEffect } from 'react'
import Input from '../Input'


const ProductForm = ({onProductAdded}) => {
    const {register, handleSubmit, reset} = useForm()
    const [selectedImage, setSelectedImage] = useState(null)
    const [categories, setCategories] = useState([])
    const [manufacturers, setManufacturers] = useState([])


    useEffect(() => {
        AxiosRequest.get('api/category/')
        .then(res => setCategories(res.data.data))
        .catch(() => setCategories([]))
    }, [])

    useEffect(() => {
        AxiosRequest.get('api/manufacturer/')
        .then(res => setManufacturers(res.data.data))
        .catch(() => setManufacturers([]))
    }, [])


    const createProduct = async(data) => {
        try{
            const formData = new FormData()
            formData.append('title',data.title)
            formData.append('full_description',data.full_description)
            formData.append('short_description',data.short_description)
            formData.append('image', selectedImage)
            formData.append('category',data.category)
            formData.append('manufacturer',data.manufacturer)
            formData.append('price',data.price)
            const response = await AxiosRequest.post('api/products/',
                formData
            )
            console.log(response)
            setSelectedImage(null)
            reset()
            if (onProductAdded){
                onProductAdded()
            }
        }catch(error){
            console.log('Ошибка при создании:', error.response.data)
        }
    }


    return(
        <>
        <form onProductAdded={onProductAdded} onSubmit={handleSubmit(createProduct)}>
            <Input type={'text'} placeholder={'title'} {...register('title')}/>
            <Input type={'text'} placeholder={'full_description'} {...register('full_description')}/>
            <Input type={'text'} placeholder={'short_description'} {...register('short_description')}/>
            <Input type={'file'} onChange = {(e) => setSelectedImage(e.target.files[0])}/>
            <select {...register('category')}>
                {categories.map(category => (
                    <option key={category.title} value={category.title}>
                        {category.title}
                    </option>
                ))}
            </select>
            <select {...register('manufacturer')}>
                {manufacturers.map(manufacturer => (
                    <option key={manufacturer.title} value={manufacturer.title}>
                        {manufacturer.title}
                    </option>
                ))}
            </select>
            <Input type={'number'} placeholder={'price'} {...register('price')}/>
            <button type='submit'>Добавить</button>
        </form>
        </>
    )
}

export default ProductForm