import React from "react";
import "../RecipePageComponents/FoodlistNav.css";

export default function FoodlistNav() {
  return (
    <nav className="foodlist-navbar">
      <ul>
        <li className="foodlist-active">Popular</li>
        <li>North</li>
        <li>South</li>
        <li>East</li>
        <li>West</li>
      </ul>
    </nav>
  );
}
