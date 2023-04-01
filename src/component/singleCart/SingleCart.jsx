import React from 'react';
import './SingleCart.css'
// import Side from '../sidebar/Side';


const SingleCart = (props) => {
const {picture, name, authorImg, time, title} = props.cart;
const timeAddeded = props.timeAddeded;   

    return (
           
            <div className='cart'>
                <img className='rounded w-100 mt-5' src={picture} alt="" />
                <div className="name-container d-flex justify-content-between mt-3">
                    <div className='d-flex'>
                        <div className='author-image'>
                            <img src={authorImg} alt="" />
                        </div>
                        <div className='ms-3 mt-2'>
                            <h3>{name}</h3>
                            <p className="text-secondary">Mar 24 (8 Days ago)</p>
                        </div>
                    </div>
                    <div className="bookmark">
                        <p>{time} min read</p>
                    </div>
                </div>

                <div className="title mt-3">
                    <h2>{title}</h2>

                    <button onClick={() => {timeAddeded(props.cart)}} className='mark border border-none'>
                    <a href="#">Mark as read</a>
                    </button>

                </div>
                </div>
        

    );
};

export default SingleCart;