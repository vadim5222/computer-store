import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import AxiosRequest from '../../utils/AxiosRequest'

const CatalogFilters = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        AxiosRequest.get('api/category/')
        .then(res => setCategories(res.data.data))
        .catch(() => setCategories([]))
    })





    return (
        <div className="bg-blue-200">
            <h1>Фильтры</h1>
            <button>
                <Link to='/'>Назад</Link>
            </button>
            <div>
                <div>
                    <h3>Категории</h3>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default CatalogFilters