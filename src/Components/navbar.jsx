import React from "react";
import logo from "../assets/Images/logo.png";
import user from "../assets/Images/user.png";
import cart from "../assets/Images/cart.png";
import "../Components/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isRecipePage = location.pathname.includes("/recipe");

  const linkStyle = isRecipePage ? { color: "black" } : { color: "white" };
  return (
    <nav className="navbar-container">
      <img src={logo} alt="logo" className="logo" />

      <ul className="navbar">
        <li>
          <Link to="/" style={linkStyle} class="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipe" style={linkStyle} class="active">
            Recipe
          </Link>
        </li>
        <li>
          <Link to="/order" style={linkStyle} class="active">
            Order
          </Link>
        </li>
        <li>
          <Link to="/blog" style={linkStyle} class="active">
            Blog
          </Link>
        </li>
      </ul>

      <div className="nav-button">
        <button className="user">
          <img src={user} alt="user" />
          <Link to="/signup"> Log In</Link>
        </button>
        <button className="cart">
          <img src={cart} alt="cart" />
          <Link to="/signup">Cart</Link>
        </button>
      </div>
    </nav>
  );
}
