import React, { useState } from "react";
import logo from "../Assets/dine-time.png";
import "../CSS/header-component.css";
import { Link } from "react-router-dom";

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
            <li className="headerLi">
              <Link to="/">Home</Link>
            </li>
            <li className="headerLi">
              <Link to="/About">About</Link>
            </li>
            <li className="headerLi">
              <Link to="/Contact">Contact Us</Link>
            </li>
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
