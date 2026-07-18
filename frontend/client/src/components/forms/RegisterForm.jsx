import { useForm } from "react-hook-form"
import AxiosRequest from "../../utils/AxiosRequest"
import Input from "../Input"
import Label from "../Label"
import { useNavigate } from "react-router-dom"


const RegisterForm = () => {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const registerUser = async (data) => { 
    try {
      const response = await AxiosRequest.post('api/register/', {
        username: data.username,
        email: data.email,
        password:data.password
      })
      console.log(response)
      navigate('/login')
    } catch (e) { 
      console.log(e)
    }
  }

  
    return(
      <>
        <form onSubmit={handleSubmit(registerUser)}>
          <Label htmlFor={'username'} value={'Username'}/>
          <Input type={'text'} placeholder={'Your username'} {...register('username')} />

          <Label htmlFor={'email'} value={'Email'}/>
          <Input type={'email'} placeholder={'Your email'} {...register('email')} />
          
          <Label htmlFor={'password'} value={'password'}/>
          <Input type={'password'} placeholder={'Your password'} {...register('password')} />
          
          <button className='cursor-pointer bg-blue-600 text-white px-10 py-2 rounded-2xl' type="submit">Зарегистрироваться</button>
        </form>
        </>
    )
}

export default RegisterForm