import React from 'react';
import './SingleCart.css'


const SingleCart = ({cart}) => {
    console.log(cart);
    return (
        <div className='main-container'>
            <div className='cart'>
            <img className='rounded w-100' src={cart.picture} alt="" />

            <div className="name-container d-flex justify-content-between mt-3">
            <div className='d-flex'>
            <div className='author-image'>
            <img src={cart.authorImg} alt="" />
            </div>
            <div className='ms-3 mt-2'>
            <h3>{cart.name}</h3>
            <p className = "text-secondary">Mar 24 (8 Days ago)</p>
            </div>
            </div>
            <div className="bookmark">
                <p>06 min read</p>
            </div>
            </div>

            <div className="title mt-3">
                <h2>{cart.title}</h2> 
        
                <a href="#">Mark as read</a>
                
            </div>
            
                
            
            
        </div>
        <div className="side-ber">
            <h2>right side</h2>
        </div>
        </div>
    );
};

export default SingleCart;