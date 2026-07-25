import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useAuthStore from '../store/AuthStore'

const Header = () => {
    const { user, fetchUser, logout } = useAuthStore()

    useEffect(() => {
        fetchUser()
    }, [])

    const appRouter = (
        <div className='flex items-center gap-14'>
            <Link to='/'><img src="/logo.png" alt="logo" /></Link>
            <nav>
                <ul className='flex items-center gap-10'>
                    <Link to='/catalog/'>Catalog</Link>
                    <Link>Desktop PCs</Link>
                    <Link>Networking Devices</Link>
                    <Link>PC Parts</Link>
                    {user?.is_superuser && <Link to='/admin-page/'>Админ-панель</Link>}
                </ul>
            </nav>
            <div className='flex items-center gap-3'>
                <Link to='/profile/'>{user?.username}</Link>
                <button onClick={logout}>Выйти</button>
            </div>
        </div>
    )

    const authRouter = (
        <div className='flex items-center gap-14'>
            <nav>
                <ul className='flex items-center gap-10'>
                    <Link to='/login/'>Войти</Link>
                    <Link to='/register/'>Зарегистроваться</Link>
                </ul>
            </nav>
        </div>
    )

    return (
        <div className='border border-r-0 border-l-0 border-t-0 border-b-gray-400'>
            <header className='container m-auto p-8 '>
                <div className='flex justify-between items-center'>
                    {user ? appRouter : authRouter}
                </div>
            </header>
        </div>
    )
}

export default Header