import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import './Cart.css';
import SideCart from '../sideCart/SideCart';


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
        <div className='main-container row cols-sm-1 cols-md-1 cols-lg-2'>

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
            <div className="side-ber me-3 p-3 h-25">
               <SideCart bookmark = {bookmark}></SideCart>
                </div>
        </div>
    );
        };

export default Cart;