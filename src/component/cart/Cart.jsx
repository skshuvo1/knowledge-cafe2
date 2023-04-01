import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import './Cart.css';


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
        // console.log(cart)
        
       
    }
    return (
        <div className='main-container'>

            <div>
            {
                carts.map(cart => <SingleCart 
                    cart = {cart}
                    key = {cart.id}
                    timeAddeded = {timeAddeded}
            
                    >
                           
                    </SingleCart>)
            }
            </div>
            <div className="side-ber bg-secondary-subtle me-3 p-3 h-25">
                <h3>Spent time on read:{}</h3>
                <h3>Bookmarked Blogs: {bookmark.length}</h3>
                </div>
        </div>
    );
        };

export default Cart;