import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>Price:{price}</p>
        </div>
    );
};

export default Product;