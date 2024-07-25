import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import blackuser from "../../assets/Images/blackuser.png";
import cart from "../../assets/Images/cart.png";
import "../../Pages/RecipeDetailsComponents/recipedetailsnav.css";

export default function RecipeDetailsNav() {
  return (
    <nav className="recipe-navbar-container">
      <img src={logo} alt="logo" className="logo" />

      <ul className="recipe-navbar">
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
