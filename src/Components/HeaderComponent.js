import React from 'react';
import logo from '../Assets/dine-time.png'
import '../CSS/header-component.css'

const Title = () => {
    return(
        <a href="/">
            <img className="title-img" alt="logo" src={logo} />
        </a>
    );
};

const HeaderComponent = () => {
    return(
        <>
            <div className="header-component">
                <Title/>
                <div className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default HeaderComponent;