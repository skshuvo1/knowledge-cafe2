import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';

const Cart = () => {
    const [carts, setCart] = useState([])

    useEffect(() => {

        fetch('data.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])
    return (
        <div>

            {
                carts.map(cart => <SingleCart 
                    cart = {cart}
                    key = {cart.id}></SingleCart>)
            }
        </div>
    );
};

export default Cart;