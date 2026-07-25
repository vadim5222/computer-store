import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AiOutlineUser } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { Link } from 'react-router-dom';

const AppSidebar = () => {
    return (
        <>
            <Sidebar rootStyles={{
                padding: '20px',
            }}>
                <Menu>
                    <div className='flex items-center'>
                        <AiOutlineUser className='w-3.5' />
                        <MenuItem component={<Link to='/profile/'/>}>Профиль</MenuItem>
                    </div>
                    <div className='flex items-center'>
                        <FiBriefcase />
                        <MenuItem component={<Link to='/profile/orders'/>}> Мои заказы </MenuItem>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineMessage />
                        <MenuItem component={<Link to='/profile/reviews'/>}> Мои отзывы </MenuItem>
                    </div>
                    <div className='flex items-center'>
                        <BsHeart />
                        <MenuItem component={<Link to='/profile/favorites'/>}> Избранное </MenuItem>
                    </div>
                    <div className='flex items-center border-b'>
                        <BsGear />
                        <MenuItem> Настройки профиля </MenuItem>
                    </div>
                </Menu>
            </Sidebar>
        </>
    )
}

export default AppSidebar