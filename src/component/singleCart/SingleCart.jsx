import React from 'react';

const SingleCart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <img src={cart.picture} alt="" />
        </div>
    );
};

export default SingleCart;