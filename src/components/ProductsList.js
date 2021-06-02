import Product from './Product';
import React,{ useContext } from 'react';
import { Context } from '../context/ProductsProvider';

const ProductsList = () => {

    const { products } = useContext(Context);

    return (
        <div className="products-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList;