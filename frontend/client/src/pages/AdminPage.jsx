import { useState, useEffect } from "react"
import CategoryForm from "../components/CategoryForm"
import AxiosRequest from "../utils/AxiosRequest"
import ManufacturerForm from "../components/ManufacturerForm"
import ProductForm from "../components/ProductForm"


const AdminPage = () => {
    // состояния для форм
    const [viewCategoryForm, setViewCategoryForm] = useState(false)
    const [viewManufacturerForm, setViewManufacturerForm] = useState(false)
    const [viewProductForm, setViewProductForm] = useState(false)
    
    
    // состояния для отображений
    const [viewCategories, setViewCategories] = useState(false)
    const [viewManufacturers, setViewManufacturers] = useState(false)
    const [viewProducts, setViewProducts] = useState(false)

    // состояния для получения
    const [categories, setCategories] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    const [products, setProducts] = useState([])


    // функции для загрузки данных
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


    const productsAdded = () => {
        AxiosRequest.get('api/products/')
        .then(res => setProducts(res.data.data))
        .catch(() => setProducts([]))
    }

    useEffect(() => {
        productsAdded()
    }, [])

    return (
        <div>
            <button className="cursor-pointer" onClick={() => setViewCategoryForm(!viewCategoryForm)}>Добавить категорию</button>
            <button className="cursor-pointer" onClick={() => setViewManufacturerForm(!viewManufacturerForm)}>Добавить производителя</button>
            <button className="cursor-pointer" onClick={() => setViewProductForm(!viewProductForm)}>Добавить продукт</button>


            <button className="cursor-pointer" onClick={() => setViewCategories(!viewCategories)}>Показать существущие категории</button>
            <button className="cursor-pointer" onClick={() => setViewManufacturers(!viewManufacturers)}>Показать существущих производителей</button>
            
            {viewCategoryForm && <CategoryForm onCategoryAdded={categoryAdded} />}
            {viewManufacturerForm && <ManufacturerForm onManufacturerAdded={manufacturerAdded} />}
            {viewProductForm && <ProductForm onProductAdded={productsAdded}/>}
            
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