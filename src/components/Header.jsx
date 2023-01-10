import React from 'react';
import banner from '../assets/img/banner.jpg'

const Header = () => {
    return (
        <div  className="header">
            <img src={banner} alt="" />
        </div>
    );
};

export default Header;