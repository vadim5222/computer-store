import ProductCard from "../components/ui/ProductCard"
import useProductStore from "../store/ProductStore"
import { useEffect } from "react"


const Catalog = () => {

    const {products, fetchProducts} = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl">Каталог товаров</h1>
            <div>
                <button>
                    
                </button>
            </div>

            <div className="flex items-center gap-16 flex-wrap">
                {products.map(product => (
                    <ProductCard key={product.title}
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