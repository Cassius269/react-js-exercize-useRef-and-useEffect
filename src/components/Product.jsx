function Product({name, price, stock, category}){

    return (
            <article className="border border-danger w-25 ps-5 pt-3">
                <h3 className="text-secondary">{name}</h3>
                <p>Prix: {price}</p>
                <i>Stock: {stock}</i>
                <p>Categorie: {category}</p>
            </article>
    )
}

export default Product;