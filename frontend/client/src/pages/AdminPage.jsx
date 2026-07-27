import { useState, useEffect } from "react"
import CategoryForm from "../components/forms/CategoryForm"
import AxiosRequest from "../utils/AxiosRequest"
import ManufacturerForm from "../components/forms/ManufacturerForm"
import ProductForm from "../components/forms/ProductForm"
import ProductCard from "../components/ui/ProductCard"
import { IoIosAdd } from "react-icons/io";



const AdminPage = () => {
    // состояния для форм
    const [viewCategoryForm, setViewCategoryForm] = useState(false)
    const [viewManufacturerForm, setViewManufacturerForm] = useState(false)
    const [viewProductForm, setViewProductForm] = useState(false)


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
        <div className="container mx-auto">
            {viewManufacturerForm && <ManufacturerForm onManufacturerAdded={manufacturerAdded} />}
            {viewProductForm && <ProductForm onProductAdded={productsAdded} />}
            <div className="flex items-center flex-wrap justify-between">
                <div className="shadow-xl p-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">Категории</h1>
                        <button className="cursor-pointer bg-blue-600 flex items-center text-white p-2 gap-3 rounded-md" onClick={() => setViewCategoryForm(!viewCategoryForm)}>
                            <IoIosAdd />
                            <p>Добавить категорию</p>
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="px-6 py-4">Название</th>
                                <th className="px-6 py-4">Количество товаров</th>
                                <th className="px-6 py-4">Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(category => (
                                <tr key={category.title}>
                                    <td className="px-6 py-4">{category.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {viewCategoryForm && <CategoryForm onCategoryAdded={categoryAdded} />}
                </div>

                <div className="shadow-xl p-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">Производители</h1>
                        <button className="cursor-pointer flex items-center p-2 gap-3 bg-blue-600 text-white rounded-md" onClick={() => setViewManufacturerForm(!viewManufacturerForm)}>
                            <IoIosAdd />
                            Добавить производителя
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="px-6 py-4">Название</th>
                                <th className="px-6 py-4">Описание</th>
                                <th className="px-6 py-4">Количество товаров</th>
                                <th className="px-6 py-4">Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manufacturers.map(manufacturer => (
                                <tr key={manufacturer.title}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-6">
                                            <img src={manufacturer.image} alt="avatar" />
                                            <p>
                                                {manufacturer.title}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{manufacturer.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="shadow-xl p-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl">Товары</h1>
                        <button className="cursor-pointer flex items-center p-2 gap-3 bg-blue-600 text-white rounded-md" onClick={() => setViewProductForm(!viewProductForm)}>
                            <IoIosAdd />
                            Добавить продукт
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="px-6 py-4">Название</th>
                                <th className="px-6 py-4">Полное описание</th>
                                <th className="px-6 py-4">Краткое описание</th>
                                <th className="px-6 py-4">Категория</th>
                                <th className="px-6 py-4">Производитель</th>
                                <th className="px-6 py-4">Цена</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.title}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-6">
                                            <img src={product.image} alt="avatar" />
                                            <p>{product.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{product.full_description}</td>
                                    <td className="px-6 py-4">{product.short_description}</td>
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="px-6 py-4">{product.manufacturer}</td>
                                    <td className="px-6 py-4">{product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default AdminPage