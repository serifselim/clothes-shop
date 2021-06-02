import React, { useContext } from 'react';
import { Context } from '../context/ProductsProvider';
import { Link } from 'react-router-dom';

const Header = () => {

    const { filterProducts } = useContext(Context);

    const handleClick = (e) => {
        filterProducts(e.target.value)
    }

    return (
        <div className="header">

                <ul className="product-nav">
                    <li><Link to="/">Store</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>

            <div className="product-option">
                <span className="product-option__text">Order by</span>
                <select onChange={handleClick} className="product-option__select">
                    <option value>Select</option>
                    <option value="lowest">Lowest to highest</option>
                    <option value="highest">Highest to lowest</option>
                </select>
            </div>
        </div>
    )
}

export default Header;