import { useForm } from "react-hook-form"
import AxiosRequest from "../../utils/AxiosRequest"


const ProfileUpdateForm = ({userId}) => {

    const {register, handleSubmit} = useForm()

    const updateUser = async(data) => {
        try{
            const formData = new FormData()
            if (data.username){
                formData.append('username', data.username)
            }
            if (data.email){
                formData.append('email', data.email)
            }
            const response = await AxiosRequest.patch(`/api/update/${userId}/`,
                formData
            )
            console.log(response)
        }catch(error){
            console.error('Ошибка при обновлении:', error)
        }
    }


    return(
        <>
        <form>
            
        </form>
        </>
    )
}

export default ProfileUpdateForm