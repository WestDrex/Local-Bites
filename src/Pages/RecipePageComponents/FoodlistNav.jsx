import React, { useState } from "react";
import "../RecipePageComponents/FoodlistNav.css";

export default function FoodlistNav() {
  const [activeItem, setActiveItem] = useState("Popular");

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <nav className="foodlist-navbar">
      <ul>
        {["Popular", "North", "South", "East", "West"].map((item) => (
          <li
            key={item}
            className={activeItem === item ? "foodlist-active" : ""}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

{
  /* <ul>
<li className="foodlist-active">Popular</li>
<li>North</li>
<li>South</li>
<li>East</li>
<li>West</li>
</ul> */
}
