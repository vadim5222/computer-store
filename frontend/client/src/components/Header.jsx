import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <header className='container m-auto mb-16 p-8 border border-r-0 border-l-0 border-t-0 border-b-gray-400'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-14'>
                        <Link to='/'><img src="/logo.png" alt="logo" /></Link>
                        <nav>
                            <ul className='flex items-center gap-10'>
                                <Link>Laptops</Link>
                                <Link>Desktop PCs</Link>
                                <Link>Networking Devices</Link>
                                <Link>PC Parts</Link>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className='flex items-center gap-10'>
                            <Link><img src="/search.png" alt="search" /></Link>
                            <Link><img src="/basket.png" alt="basket" /></Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header