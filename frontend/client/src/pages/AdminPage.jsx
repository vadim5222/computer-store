import { useState, useEffect } from "react"
import CategoryForm from "../components/CategoryForm"
import AxiosRequest from "../utils/AxiosRequest"
import ManufacturerForm from "../components/ManufacturerForm"


const AdminPage = () => {
    const [viewCategoryForm, setViewCategoryForm] = useState(false)
    const [viewManufacturerForm, setViewManufacturerForm] = useState(false)
    const [viewCategories, setViewCategories] = useState(false)
    const [viewManufacturers, setViewManufacturers] = useState(false)
    const [categories, setCategories] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const categoryAdded = () => {
        AxiosRequest.get('api/category/')
            .then(res => setCategories(res.data.data))
            .catch(() => setCategories([]))
    }
    useEffect(() => {
        categoryAdded()
    }, [])

    const manufacturerAdded = () => {
        AxiosRequest.get('api/manufacturer/')
        .then(res => setManufacturers(res.data.data))
        .catch(() => setManufacturers([]))
    }

    useEffect(() => {
        manufacturerAdded()
    }, [])

    return (
        <div>
            <button className="cursor-pointer" onClick={() => setViewCategoryForm(!viewCategoryForm)}>Добавить категорию</button>
            <button className="cursor-pointer" onClick={() => setViewManufacturerForm(!viewManufacturerForm)}>Добавить производителя</button>
            <button className="cursor-pointer" onClick={() => setViewCategories(!viewCategories)}>Показать существущие категории</button>
            <button className="cursor-pointer" onClick={() => setViewManufacturers(!viewManufacturers)}>Показать существущих производителей</button>
            
            {viewCategoryForm && <CategoryForm onCategoryAdded={categoryAdded} />}
            {viewManufacturerForm && <ManufacturerForm onManufacturerAdded={manufacturerAdded} />}
            
            {viewCategories && <div>
                {categories.map(category => (
                    <p key={category.title}>{category.title}</p>
                ))}
            </div>}
            {viewManufacturers && <div>
                {manufacturers.map(manufacturer => (
                    <div key={manufacturer.title}>
                        <p>{manufacturer.title}</p>
                        <p>{manufacturer.description}</p>
                    </div>
                ))}
                </div>}
        </div>
    )
}

export default AdminPage