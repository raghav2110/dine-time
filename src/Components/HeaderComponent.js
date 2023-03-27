import React, { useState } from "react";
import logo from "../Assets/dine-time.png";
import "../CSS/header-component.css";

const Title = () => {
  return (
    <a href="/">
      <img className="title-img" alt="logo" src={logo} />
    </a>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header-component">
        <Title />
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Logout</button>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
