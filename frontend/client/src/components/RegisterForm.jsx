import { useForm } from "react-hook-form"
import AxiosRequest from "../utils/AxiosRequest"


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
          <input type="text" {...register('username')} />
          <input type="email" {...register('email')} />
          <input type="text" {...register('password')} />
          <button type="submit">Зарегистрироваться</button>
        </form>
        </>
    )
}

export default RegisterForm