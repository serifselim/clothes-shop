import React,{ useContext } from 'react';
import { Context } from '../context/ProductsProvider';

const FavoriteItem = (props) => {

    const product = props.product;

    const { addBasket, basket, deleteFavorite } = useContext(Context);

    const handleBasket = (product) => {
        const basketHasProduct = basket.some(({ id }) => id === product.id);
        if (!basketHasProduct) {
            addBasket(product);
        }
    }

    return (
        <div className="product-item">
            <img src={product.image} className="product-item__img" alt={product.title} />
            <div className="product-item__price">
                <span className="product-item__price--title">{product.title}</span>
                <span className="product-item__price--count">{product.price} $</span>
                <button onClick={() => handleBasket(product)} className="product-item__price--button" value={product.id}>Buy Now</button>
                <button onClick={() => deleteFavorite(product.id)} className="product-item__price--button" value={product.id}>Remove</button>
            </div>
        </div>
    )
}

export default FavoriteItem;