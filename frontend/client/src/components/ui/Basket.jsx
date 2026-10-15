import useCartItemStore from "../../store/useCartItemStore"
import { useEffect } from "react"


const Basket = () => {

    const { cartitems, total_quantity, total_price, fetchCartItem } = useCartItemStore()

    useEffect(() => {
        fetchCartItem()
    }, [])

    return (
        <div className="container mx-auto">
            <div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-5">
                        {cartitems.map(cartitem => (
                            <div className="flex items-center" key={cartitem.id}>
                                <div className="shadow-2xl flex min-w-6xl gap-6">
                                    <img className="w-48" src={`http://localhost:8000/${cartitem.product.image}`} alt="" />
                                    <p>{cartitem.product.title}</p>
                                    <p>{cartitem.product.manufacturer}</p>
                                    <p>{cartitem.quantity}</p>
                                    <p>{cartitem.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p>Количество товаров: {total_quantity.total_quantity}</p>
                        <p>Товаров на сумму: {total_price.total_price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket