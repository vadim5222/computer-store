import ProductCard from "../components/ui/ProductCard"
import useProductStore from "../store/ProductStore"
import { useEffect, useState } from "react"
import Basket from "../components/ui/Basket"
import AxiosRequest from "../utils/AxiosRequest"


const Catalog = () => {

    const { products, fetchProducts } = useProductStore()


    useEffect(() => {
        fetchProducts()
    }, [])

    const addToCart = async () => {
        try{
            const response = await AxiosRequest.post('/cart/cart-item/', {
                'id': products.id,
                'cart': products.cart,
                'product': products.products
            }) 
        }catch(e){
            console.error(e)
        }
    }


    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl">Каталог товаров</h1>

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
                        // addToCart={}
                    />
                ))}
            </div>
        </div>
    )
}

export default Catalog