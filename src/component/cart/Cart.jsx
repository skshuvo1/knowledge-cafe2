import React, { useEffect, useState } from 'react';
import SingleCart from '../singleCart/SingleCart';
import './Cart.css';
import SideCart from '../sideCart/SideCart';
import ListHeader from '../listHeader/ListHeader';


const Cart = () => {
    const [carts, setCart] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [times, setTimes] = useState([])
    const [watchName, setWatchName] = useState([])

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])


    const handleTotalTime = (cart) => {
        const newTime = [...times, cart.time];
        setTimes(newTime)
    }

    const handleBookmark = (lengths) => {
        const newBookmark = [...bookmark, lengths]
        setBookmark(newBookmark)

        const previousName = localStorage.getItem('name');

        if (previousName) {
            const setName = previousName + " " + lengths.name;
            localStorage.setItem('name', setName)
            setWatchName(setName)


        }
        else {
            localStorage.setItem('name', lengths.name);
            setWatchName(lengths.name)

        }

    }

    return (

        <div className='row main-container'>
            <div className=''>
                {
                    carts.map(cart => <SingleCart
                        cart={cart}
                        key={cart.id}
                        handleTotalTime={handleTotalTime}
                        handleBookmark={handleBookmark}
                    >
                    </SingleCart>)
                }

            </div>
            <div className='side-menu-ber'>
                <div className='me-3'>
                    <ListHeader times={times} ></ListHeader>
                </div>
                <div className="side-ber me-3 p-3 h-25">
                    <SideCart bookmark={bookmark} watchName={watchName}></SideCart>
                </div>
            </div>
        </div>

    );
};

export default Cart;