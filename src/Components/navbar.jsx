import React from "react";
import logo from "../assets/Images/logo.png";
import user from "../assets/Images/user.png";
import cart from "../assets/Images/cart.png";
import "../Components/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isRecipePage = location.pathname.includes("/recipe");

  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('nav-active');
  }

  const linkStyle = isRecipePage ? { color: "black" } : { color: "white" };
  return (
    <nav className="navbar-container">
      <img src={logo} alt="logo" className="logo" />

      <div className="hamburger1" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="navbar">
        <li>
          <Link to="/" style={linkStyle} className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipe" style={linkStyle} className="active">
            Recipe
          </Link>
        </li>
        <li>
          <Link to="/order" style={linkStyle} className="active">
            Order
          </Link>
        </li>
        <li>
          <Link to="/blog" style={linkStyle} className="active">
            Blog
          </Link>
        </li>

        <div className="mob-buttons">
        <li>
          <Link to="/login" style={linkStyle} className="active">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup" style={linkStyle} className="active">
            Cart
          </Link>
        </li>
        </div>
      </ul>

      <div className="nav-button">
        <button className="user">
          <img src={user} alt="user" />
          <Link to="/login"> Log In</Link>
        </button>
        <button className="cart">
          <img src={cart} alt="cart" />
          <Link to="/signup">Cart</Link>
        </button>
      </div>
    </nav>
  );
}
