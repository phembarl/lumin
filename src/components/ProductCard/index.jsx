import { func, number, shape, string } from 'prop-types';
import React from 'react';
import { formatPrice } from '../../utils';

export default function ProductCard({ product, handleAddToCart, activeCurrency }) {
    const { title, price, image_url } = product;

    return (
        <div className="product">
            <div className="img-holder">
                <img src={image_url} alt="product" className="product-image" />
            </div>

            <div className="product-name">{title}</div>
            <div className="product-price">From {formatPrice(activeCurrency).format(price)}</div>
            <button className="btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

ProductCard.propTypes = {
    product: shape({
        image_url: string.isRequired,
        title: string.isRequired,
        price: number.isRequired
    }),
    handleAddToCart: func.isRequired,
    activeCurrency: string.isRequired
};
