import React from 'react';

const ReviewItem = (props) => {
    const{name,price,shipping,quantity}=props.product
    return (
        <div>
            <h3>This is a review page:{name}</h3>
        </div>
    );
};

export default ReviewItem;