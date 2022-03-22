import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings} start</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;