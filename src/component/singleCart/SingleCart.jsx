import React from 'react';
import './SingleCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const SingleCart = (props) => {
const {picture, name, authorImg, time, title} = props.cart;
const handleTotalTime = props.handleTotalTime;
const handleBookmark =props.handleBookmark;
// console.log(handleTotalTime);

  

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
                        <p>{time} min read 
                        <button onClick={() => handleBookmark(props.cart)} className = "border border-none"><FontAwesomeIcon icon={faBookmark} /></button>
                        </p>
                    </div>
                </div>

                <div className="title mt-3">
                    <h2>{title}</h2>

                    <button onClick={() =>handleTotalTime(props.cart)} className='mark border border-none bg-white'>
                    <a href="#">Mark as read</a>
                    </button>

                </div>
                </div>
        

    );
};

export default SingleCart;