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
            if (data.first_name) {
                formData.append('first_name', data.first_name)
            }
            if (data.last_name) {
                formData.append('last_name', data.last_name)
            }
            if (data.username) {
                formData.append('username', data.username)
            }
            if (data.phone) {
                formData.append('phone', data.phone)
            }
            if (data.address) {
                formData.append('address', data.address)
            }
            if (data.email) {
                formData.append('email', data.email)
            }
            const response = await AxiosRequest.patch(`/api/update/${userId}/`,
                formData
            )
            console.log(response)
        } catch (error) {
            console.error('Ошибка при обновлении:', error)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(updateUser)}>
                <Input {...register('first_name')} placeholder={'Ваще имя'}/>
                <Input {...register('last_name')} placeholder={'Ваша фамилия'}/>
                <Input {...register('username')} placeholder={'Ваше имя пользователя'}/>
                <Input {...register('phone')} placeholder={'Ваш номер телефона'}/>
                <Input {...register('address')} placeholder={'Ваш адрес проживания'}/>
                <Input {...register('email')} placeholder={'Ваш email'}/>
                <button className="bg-blue-600 px-8 py-2.5 rounded-md text-white" type="submit">Сохранить</button>
            </form>
        </>
    )
}

export default ProfileUpdateForm