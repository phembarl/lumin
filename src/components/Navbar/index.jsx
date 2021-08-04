import { func } from 'prop-types';
import React from 'react';
import CartIcon from '../../assets/images/cart.png';

export default function Navbar({ toggleSideDrawer, getTotalItemsInCart }) {
    return (
        <div className="navbar">
            <div className="brand-name">
                <img
                    src="https://store.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png"
                    alt="logo"
                    className="brand-img"
                />
            </div>
            <ul className="links">
                <li className="link">
                    <a href="#shop">Shop</a>
                </li>
                <li
                    className="link"
                    onKeyPress={toggleSideDrawer}
                    onClick={toggleSideDrawer}
                    role="presentation">
                    <img className="cart" src={CartIcon} alt="cart" />
                    <span className="cart-item-count">{getTotalItemsInCart()}</span>
                </li>
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    toggleSideDrawer: func.isRequired,
    getTotalItemsInCart: func.isRequired
};
