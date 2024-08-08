import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/Images/logo.png";
import blackuser from "../../../public/Images/blackuser.png";
import cart from "../../../public/Images/cart.png";
import "../../Pages/RecipeDetailsComponents/recipedetailsnav.css";

export default function RecipeDetailsNav() {
  function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("nav-active");
  }

  return (
    <nav className="recipe-navbar-container">
      <img src={logo} alt="logo" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="recipe-navbar">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipe" className="active">
            Recipe
          </Link>
        </li>
        <li>
          <Link to="/order" className="active">
            Order
          </Link>
        </li>
        <li>
          <Link to="/blog" className="active">
            Blog
          </Link>
        </li>
      </ul>

      <div className="recipe-nav-button">
        <button className="user">
          <img src={blackuser} alt="user" />
          <Link className="linkstyle" to="/login">
            {" "}
            Log In
          </Link>
        </button>
        <button className="cart">
          <img src={cart} alt="cart" />
          <Link className="linkstyle2" to="/signup">
            Cart
          </Link>
        </button>
      </div>
    </nav>
  );
}
