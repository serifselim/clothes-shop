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

            <div className="product-count">
                16 Product(s) found.
          </div>

            <div className="product-option">
                <ul>
                    <li><Link to="/">Store</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
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