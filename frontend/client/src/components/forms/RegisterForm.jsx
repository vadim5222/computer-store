import { useForm } from "react-hook-form"
import AxiosRequest from "../../utils/AxiosRequest"
import Input from "../ui/Input"
import Label from "../ui/Label"
import { useNavigate } from "react-router-dom"


const RegisterForm = () => {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const registerUser = async (data) => {
    try {
      const response = await AxiosRequest.post('api/register/', {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        phone: data.phone,
        address: data.address,
        email: data.email,
        password: data.password
      })
      console.log(response)
      navigate('/login')
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit(registerUser)}>
        <Label htmlFor={'first_name'} value={'First name'} />
        <Input type={'text'} placeholder={'your name'} {...register('first_name')} />

        <Label htmlFor={'last_name'} value={'Last name'} />
        <Input type={'text'} placeholder={'your last name'} {...register('last_name')} />

        <Label htmlFor={'username'} value={'Username'} />
        <Input type={'text'} placeholder={'Your username'} {...register('username')} />

        <Label htmlFor={'phone'} value={'Phone'} />
        <Input type={'text'} placeholder={'Your phone'} {...register('phone')} />

        <Label htmlFor={'address'} value={'Address'} />
        <Input type={'text'} placeholder={'Your address'} {...register('address')} />

        <Label htmlFor={'email'} value={'Email'} />
        <Input type={'email'} placeholder={'Your email'} {...register('email')} />

        <Label htmlFor={'password'} value={'password'} />
        <Input type={'password'} placeholder={'Your password'} {...register('password')} />

        <button className='cursor-pointer bg-blue-600 text-white px-10 py-2 rounded-2xl' type="submit">Зарегистрироваться</button>
      </form>
    </>
  )
}

export default RegisterForm