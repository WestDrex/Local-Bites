import React from "react";
import "../Components/eatlocal.css";
import eatLocalData from "./eatlocaldata";
import { Link } from "react-router-dom";

const DishesSection = () => {
  return (
    <div className="dishes-container">
      <div className="header-bar">
        <div className="orange-bar"></div>
        <div className="orange-bar"></div>
      </div>

      <div className="dishes-content">
        <div className="dishes-text-section">
          <h2>Essential Dishes</h2>
          <h3>Eat Local</h3>
          <p>
            We believe that what you eat depends on where you are. Hungry yet?
          </p>
        </div>
        <div className="dishes-cards">
          {eatLocalData.map((dish) => (
            <div className="main-card" key={dish.id}>
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <div className="dishes-card-content">
                <h4>{dish.name}</h4>
                <p>
                  {dish.description}{" "}
                  <Link to={`/fooddetailspage/${dish.id}`}>Read More...</Link>
                </p>
                <div className="rating">
                  {"★".repeat(dish.rating)}
                  {"☆".repeat(5 - dish.rating)}
                </div>
                <Link to={`/fooddetailspage/${dish.id}`}>
                  <button className="content-add-button">+</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="#" className="see-more">
        See More &gt;
      </a>
    </div>
  );
};

export default DishesSection;
