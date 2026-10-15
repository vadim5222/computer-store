import useCartItemStore from "../../store/useCartItemStore"
import { useEffect } from "react"


const Basket = () => {

    const { cartitems, fetchCartItem } = useCartItemStore()

    useEffect(() => {
        fetchCartItem()
    }, [])

    return (
        <div className="container mx-auto shadow-2xl">
            <div>
                <div>
                    {cartitems.map(cartitem => (
                        <div className="flex items-center" key={cartitem.id}>
                            <img className="w-48" src={`http://localhost:8000/${cartitem.product.image}`} alt="" />
                            <p>{cartitem.product.title}</p>
                            <p>{cartitem.product.manufacturer}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <p>{cartitems.quantity}</p>
                    <p>{cartitems.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Basket