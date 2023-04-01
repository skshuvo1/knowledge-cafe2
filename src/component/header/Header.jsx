import React from 'react';
import logo from '../../images/pique.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center m-4 bg-danger-subtle'>
            <div className="knowledge-container">
                <h2 className='ms-2'>Programming World</h2>
            </div>
            <div className="nav-img">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;