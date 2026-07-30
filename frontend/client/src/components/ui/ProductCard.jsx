import AxiosRequest from "../../utils/AxiosRequest"


const ProductCard = ({ image, title, full_description, short_description, category, manufacturer, price }) => {
    return (
        <div className="border border-black p-1.5 rounded-md max-h-96">
            <img className="w-72 mx-auto rounded-md" src={`http://localhost:8000/${image}`} alt="avatar" />
            <p className="text-xl mb-1.5">{title}</p>
            <p className="line-clamp-2 w-96 mb-2.5">{short_description}</p>
            <div className="flex gap-6 font-bold mb-1.5">
                <p>{category}</p>
                <p>{manufacturer}</p>
            </div>
            <p className="mb-3">{price}</p>
            <button className="bg-blue-600 text-white p-2 rounded-md">
                Добавить в корзину
            </button>
        </div>
    )
}

export default ProductCard