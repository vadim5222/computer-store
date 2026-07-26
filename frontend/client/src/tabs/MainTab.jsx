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
        <div className='p-7'>
            <h1 className='text-3xl mb-3'>Мой профиль</h1>
            <p className='text-xl mb-5'>Управляйте своими данными и настройками</p>
            <div className="flex shadow-2xl min-w-5xl justify-between items-start p-10 mb-10">
                <div className='flex gap-10'>
                    <img className="w-44 rounded-md" src="/avatar.png" alt="avatar" />
                    <div className='text-xl'>
                        <p>{user?.first_name} {user?.last_name}</p>
                        <p>{user?.username}</p>
                        <p>{user?.email}</p>
                        <p>{user?.date_joined}</p>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl mb-5'>О вас</h1>
            <div className='shadow-2xl p-10 flex items-start justify-between'>
                <table className='text-left'>
                    <tbody>
                        <tr>
                            <th className='p-2'>Ваше имя</th>
                            <th >{user?.first_name}</th>
                        </tr>
                        <tr>
                            <th className='p-2'>Ваша фамилия</th>
                            <th>{user?.last_name}</th>
                        </tr>
                        <tr>
                            <th className='p-2'>Ваше имя пользователя</th>
                            <th>{user?.first_name}</th>
                        </tr>
                        <tr>
                            <th className='p-2'>Ваше номер телефона</th>
                            <th>{user?.phone}</th>
                        </tr>
                        <tr>
                            <th className='p-2'>Ваше адрес проживания</th>
                            <th>{user?.address}</th>
                        </tr>
                        <tr>
                            <th className='p-2'>Ваш email</th>
                            <th>{user?.email}</th>
                        </tr>
                    </tbody>
                </table>
                <button className='flex items-center gap-5 border p-2 rounded-md cursor-pointer'>
                    <BsFillBrushFill />
                    <Link to='/profile/main/edit'>Редактировать профиль</Link>
                </button>
            </div>
            <Outlet />
        </div>
    )
}
export default MainTab