import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../../Pages/RecipeDetailsComponents/recipedetailsnav.css";

export default function RecipeDetailsNav() {
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
