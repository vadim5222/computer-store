import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileUpdateForm from "../components/forms/ProfileUpdateForm";
import { useEffect, useState } from "react";
import AxiosRequest from "../utils/AxiosRequest";



const EditTab = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        AxiosRequest.get('api/profile/')
            .then(res => setUser(res.data.data))
            .catch(() => setUser(null))
    }, [])
    return (
        <>
            <button className="flex items-center cursor-pointer">
                <Link to='/profile/'>
                    <BsFillCaretLeftFill />
                </Link>
                <p>редактирование</p>
            </button>
            <ProfileUpdateForm userId={user?.id} />
        </>
    )
}

export default EditTab