import React from "react";
import logo from "../assets/Images/logo.png";
import user from "../assets/Images/user.png";
import cart from "../assets/Images/cart.png";
import "../Components/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="logo" className="logo" />

      <ul className="navbar">
        <li>
          <Link to="/" class="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipe" class="active">
            Recipe
          </Link>
        </li>
        <li>
          <Link to="/order" class="active">
            Order
          </Link>
        </li>
        <li>
          <Link to="/blog" class="active">
            Blog
          </Link>
        </li>
      </ul>

      <div className="nav-button">
        <button className="user">
          <img src={user} alt="user" />
          <Link to="/signup"> Sign Up</Link>
        </button>
        <button className="cart">
          <img src={cart} alt="cart" />
          <Link to="/signup">Cart</Link>
        </button>
      </div>
    </nav>
  );
}
