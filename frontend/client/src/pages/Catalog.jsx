import ProductCard from "../components/ui/ProductCard"
import AxiosRequest from "../utils/AxiosRequest"
import { useState, useEffect } from "react"


const Catalog = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        AxiosRequest.get('api/products/')
            .then(res => setProducts(res.data.data))
            .catch(() => setProducts([]))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl">Каталог товаров</h1>
            <div>
                <button>
                    
                </button>
            </div>

            <div className="flex items-center gap-16">
                {products.map(product => (
                    <ProductCard key={product.id}
                        image={product.image}
                        title={product.title}
                        full_description={product.full_description}
                        short_description={product.short_description}
                        category={product.category}
                        manufacturer={product.manufacturer}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Catalog