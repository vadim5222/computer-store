
import { Outlet } from 'react-router-dom';
import AppSidebar from '../components/ui/AppSidebar';



const Profile = () => {
    return (
        <div className='flex gap-6'>
            <AppSidebar />
            <div>
                <Outlet />
            </div>
        </div >
    )
}

export default Profile