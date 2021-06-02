import React,{ useContext } from 'react';
import { Context } from '../context/ProductsProvider';
import FavoriteItem from './FavoriteItem';

const Favorites = () => {

    const { favorites } = useContext(Context);

    return(
        <div className="products-list">
            {favorites.map(product => (
                <FavoriteItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Favorites;