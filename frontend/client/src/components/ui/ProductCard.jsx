const ProductCard = ({title, full_description, short_description, category, manufacturer, price}) => {
    return(
        <div className="border border-black">
            <p>{title}</p>
            <p>{full_description}</p>
            <p>{short_description}</p>
            <p>{category}</p>
            <p>{manufacturer}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard