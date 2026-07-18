import {useForm} from 'react-hook-form'
import AxiosRequest from '../utils/AxiosRequest'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Input from './Input'
import Label from './Label'
import useAuthStore from '../store/AuthStore'

const LoginForm = () => {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const {fetchUser} = useAuthStore()


    const loginUser = async(data) => {
        try{
            const response = await AxiosRequest.post('api/login/', {
                username:data.username,
                password:data.password
            })
        console.log('Вход успешный',response)
        await fetchUser()
        navigate('/')
        }catch(e){
            console.log(e)
        }
    }


    return(
        <>
        <form onSubmit={handleSubmit(loginUser)}>
            <Label 
            htmlFor={'username'} 
            value={'username'}
            />
            <Input 
            type={'text'} 
            placeholder={'Your username'}
            {...register('username')}
            />
            
            <Label 
            htmlFor={'password'}
            value={'password'}
            />
            <Input 
            type={'password'} 
            placeholder={'Your password'}
            {...register('password')}
            />

            <div className='flex items-center gap-3'>
            <button type='submit' className='cursor-pointer bg-blue-600 text-white px-10 py-2 rounded-2xl'>Sign Up</button>
            <button className='cursor-pointer'>Forgot your password?</button>
            </div>
        </form>
        </>
    )
}

export default LoginForm