import React, { useState } from "react";
import logo from "../Assets/dine-time.png";
import "../CSS/header-component.css";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="title-img" alt="logo" src={logo} />
    </a>
  );
};

const HeaderComponent = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store)=>store.cart.items)
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
            <li className="headerLi">
              <Link to="/InstaMart">InstaMart</Link>
            </li>
            <li className="headerLi">
              <Link to="/CartComponent">Cart - {cartItems.length} items</Link>
            </li>
          </ul>
        </div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
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
