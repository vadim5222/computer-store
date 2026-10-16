import ProductCard from "../components/ui/ProductCard"
import useProductStore from "../store/ProductStore"
import { useEffect, useState } from "react"
import AxiosRequest from "../utils/AxiosRequest"
import useCartStore from "../store/useCartStore"
import AuthStore from '../store/AuthStore'

const Catalog = () => {

    const { products, fetchProducts } = useProductStore()
    const {cart, fetchCart} = useCartStore()
    const {user, fetchUser} = AuthStore()


    useEffect(() => {
        fetchProducts()
        fetchCart()
        fetchUser()
    }, [])

    const addToCart = async (product) => {
        try{
            const response = await AxiosRequest.post('/cart/cart-item/', {
                'cart': user.username,
                'product': product.title, 
                'quantity': 1,
                'price': product.price
            }) 
            console.log(response)
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
                        addToCart={() => addToCart(product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Catalog