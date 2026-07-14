import { useForm } from "react-hook-form"
import AxiosRequest from "../utils/AxiosRequest"
import Input from "./Input"


const RegisterForm = () => {

  const { register, handleSubmit } = useForm()

  const registerUser = async (data) => { 
    try {
      const response = await AxiosRequest.post('api/register/', {
        username: data.username,
        email: data.email,
        password:data.password
      })
      console.log(response)
    } catch (e) { 
      console.log(e)
    }
  }

  
    return(
      <>
        <form onSubmit={handleSubmit(registerUser)}>
          <Input type={'text'} {...register('username')} />
          <Input type={'email'} {...register('email')} />
          <Input type={'password'} {...register('password')} />
          <button className='cursor-pointer bg-blue-600 text-white px-10 py-2 rounded-2xl' type="submit">Зарегистрироваться</button>
        </form>
        </>
    )
}

export default RegisterForm