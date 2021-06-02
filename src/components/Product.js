import React,{ useContext } from 'react';
import { Context } from '../context/ProductsProvider';
import { Button } from './Button';

const Product = (props) => {

    const product = props.product;

    const { addBasket, addFavorite, basket, favorites } = useContext(Context);

    const handleBasket = (product) => {
        const basketHasProduct = basket.some(({ id }) => id === product.id);
        if (!basketHasProduct) {
            addBasket(product);
        }
    }

    const handleFavorite = (product) => {
        const favoriteHasProduct = favorites.some(({ id }) => id === product.id);
        if (!favoriteHasProduct) {
            addFavorite(product);
        }
    }

    return (
        <div className="product-item">
            <img src={product.image} className="product-item__img" alt={product.title} />
            <div className="product-item__price">
                <span className="product-item__price--title">{product.title}</span>
                <span className="product-item__price--count">{product.price} $</span>
                <Button onClick={() => handleBasket(product)} className="product-item__price--button" value={product.id}>Buy Now</Button>
                <Button green onClick={() => handleFavorite(product)} className="product-item__price--button" value={product.id}>Add Favorites</Button>
            </div>
        </div>
    )
}

export default Product;