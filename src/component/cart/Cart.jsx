import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import './Cart.css'

const Cart = () => {
    const [carts, setCart] = useState([])
    const [bookmark, setBookmark] = useState([])
    

    useEffect(() => {

        fetch('data.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])

    const timeAddeded = (cart) => {
        const newCart = [...bookmark, cart];
        setBookmark(newCart)
    }
    return (
        <div className='main-container'>

            <div>
            {
                carts.map(cart => <SingleCart 
                    cart = {cart}
                    key = {cart.id}
                    timeAddeded = {timeAddeded}>       
                    </SingleCart>)
            }
            </div>
            <div className="side-ber bg-secondary-subtle me-3 p-3 h-25">
                <h3>yes i an: {bookmark.length}</h3>
                </div>
        </div>
    );
};

export default Cart;