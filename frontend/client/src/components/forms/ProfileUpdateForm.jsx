import { useForm } from "react-hook-form"
import AxiosRequest from "../../utils/AxiosRequest"
import Input from '../ui/Input'
import { useEffect, useState } from "react"

const ProfileUpdateForm = ({ userId }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        AxiosRequest.get('api/profile/')
            .then(res => reset(res.data.data))
            .catch((err) => console.log('Ошибка загрузки:', err))
    }, [])


    const updateUser = async (data) => {
        try {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                if(value !== undefined && value !== null && value !== ''){
                    formData.append(key, value)
                }
            })
            const response = await AxiosRequest.patch(`api/update/${userId}/`, formData)
            console.log(response)
        } catch (error) {
            console.error('Ошибка при обновлении:', error)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(updateUser)}>
                <Input {...register('first_name')} placeholder={'Ваще имя'} />
                <Input {...register('last_name')} placeholder={'Ваша фамилия'} />
                <Input {...register('username')} placeholder={'Ваше имя пользователя'} />
                <Input {...register('phone')} placeholder={'Ваш номер телефона'} />
                <Input {...register('address')} placeholder={'Ваш адрес проживания'} />
                <Input {...register('email')} placeholder={'Ваш email'} />
                <button className="bg-blue-600 px-8 py-2.5 rounded-md text-white" type="submit">Сохранить</button>
            </form>
        </>
    )
}

export default ProfileUpdateForm