import { Link, Outlet } from 'react-router-dom';
import useAuthStore from '../store/AuthStore'
import AxiosRequest from "../utils/AxiosRequest"
import { useEffect } from 'react'
import { BsFillBrushFill } from "react-icons/bs";



const MainTab = () => {
    const { user, fetchUser } = useAuthStore()

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <>
            <h1>Мой профиль</h1>
            <p>Управляйте своими данными и настройками</p>
            <div className="flex shadow-2xl min-w-5xl justify-between items-start p-10">
                <div className='flex gap-10'>
                    <img className="w-44 rounded-md" src="/avatar.png" alt="avatar" />
                    <div>
                        <p>{user?.username}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <button className='flex items-center gap-5 border p-2 rounded-md cursor-pointer'>
                    <BsFillBrushFill/>
                    <Link to='/profile/main/edit'>Редактировать профиль</Link>
                </button>
            </div>
            <Outlet/>
        </>
    )
}
export default MainTab