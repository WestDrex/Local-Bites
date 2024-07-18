import React from "react";
import logo from "../assets/Images/logo.png";
import user from "../assets/Images/user.png";
import cart from "../assets/Images/cart.png";
import "../Components/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return <nav></nav>;
}

// <nav className="navbar-container">
//   <img src={logo} alt="logo" className="logo" />

//   <ul className="navbar">
//     <li>
//       <a href="#" class="active">
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="#">Recipe</a>
//     </li>
//     <li>
//       <a href="#">Order</a>
//     </li>
//     <li>
//       <a href="#">Blog</a>
//     </li>
//   </ul>

//   <div>
//     <button>
//       {" "}
//       <img src={user} alt="user" /> Sign Up
//     </button>
//     <button>
//       {" "}
//       <img src={cart} alt="cart" /> Cart
//     </button>
//   </div>
// </nav>
