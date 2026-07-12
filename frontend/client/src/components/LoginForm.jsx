import {useForm} from 'react-hook-form'
import AxiosRequest from '../utils/AxiosRequest'
import { useNavigate } from 'react-router-dom'

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
            <input type="text" {...register('username')}/>
            <input type="text" {...register('password')}/>
            <button type='submit'>отправить</button>
        </form>
        </>
    )
}

export default LoginForm