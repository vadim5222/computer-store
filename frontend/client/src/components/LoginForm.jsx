import {useForm} from 'react-hook-form'
import AxiosRequest from '../utils/AxiosRequest'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'

const LoginForm = () => {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const loginUser = async(data) => {
        try{
            const response = await AxiosRequest.post('api/login/', {
                username:data.username,
                password:data.password
            })
        console.log('Вход успешный',response)
        navigate('/')
        }catch(e){
            console.log(e)
        }
    }


    return(
        <>
        <form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="username">username</label>
            <input className='block w-lg h-14 mb-4 border border-gray-300 p-2.5 rounded-md' type="text" placeholder='Your username' {...register('username')}/>
            <label htmlFor="username">password</label>
            <input className='block w-lg h-14 mb-4 border border-gray-300 p-2.5 rounded-md' type="text" placeholder='Your password' {...register('password')}/>
            <div className='flex items-center gap-3'>
            <button type='submit' className='cursor-pointer bg-blue-600 text-white px-10 py-2 rounded-2xl'>Sign Up</button>
            <button className='cursor-pointer'>Forgot your password?</button>
            </div>
        </form>
        </>
    )
}

export default LoginForm