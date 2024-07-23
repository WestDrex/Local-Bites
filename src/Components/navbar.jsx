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
          <a href="#" class="active">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="active">
            Recipe
          </a>
        </li>
        <li>
          <a href="#" class="active">
            Order
          </a>
        </li>
        <li>
          <a href="#" class="active">
            Blog
          </a>
        </li>
      </ul>

      <div className="nav-button">
        <button className="user">
          <img src={user} alt="user" /><a href="">Sign Up</a> 
        </button>
        <button className="cart">
          <img src={cart} alt="cart" /><a href="">Cart</a> 
        </button>
      </div>
    </nav>
  );
}
