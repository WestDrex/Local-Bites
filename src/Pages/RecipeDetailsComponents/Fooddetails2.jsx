import React from "react";
import "./Fooddetails.css";
import FooddetailsData from "./FooddetailsData";
import { useParams } from "react-router-dom";
import timer from "../../assets/Images/Timer2.png";
import fire from "../../assets/Images/bi_fire.png";
import RecipePageFoodlist from "../RecipePageComponents/RecipePageFoodlist";
import HomeFooter from "../../Components/homeFooter";

const Fooddetails2 = () => {
  const { id } = useParams();
  const dish = FooddetailsData.find((dish) => dish.id === parseInt(id));

  if (!dish) {
    return <h2>Dish not found</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-header">
        <h1 className="details-title">{dish.header}</h1>
        <button className="details-order-btn">Order</button>
      </div>
      <div className="details">
        <div className="detail-item">
          <img src={dish.userimg} alt="Kevin Star" />
          <div>
            <h4>{dish.username}</h4>
            <p>{dish.date}</p>
          </div>
        </div>
        <div className="detail-item">
          <img src={timer} alt="timer" />
          <div className="time-container">
            <h2>PREP TIME</h2>
            <p>{dish.preptime}</p>
          </div>
        </div>
        <div className="detail-item">
          <img src={timer} alt="timer" />
          <div>
            <h2>COOK TIME</h2>
            <p>{dish.cooktime}</p>
          </div>
        </div>
        <div className="detail-item">
          <img src={fire} alt="timer" />
          <div>
            <h2>DIFFICULTY</h2>
            <p>{dish.difficulty}</p>
          </div>
        </div>
      </div>
      <div className="details-image-container">
        <img src={dish.displayimg} alt="Bole display Image" />
      </div>
      <p className="details-description">{dish.mealinfo}</p>
      <div className="ingredients-other-recipes">
        <div className="details-ingredients">
          <h2>Ingredients</h2>
          <h3>{dish.maindish.name}</h3>
          <ul>
            {dish.maindish.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>{dish.sauce.name}</h3>
          <ul>
            {dish.sauce.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="details-other-recipes">
          <h2>Other Recipes</h2>
          {dish.otherRecipes.map((recipe, index) => (
            <div className="details-recipe" key={index}>
              <img src={recipe.image} alt={recipe.title} />
              <div>
                <h4>{recipe.title}</h4>
                <p>By {recipe.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="directions">
        <h2>Directions</h2>
        <ol>
          <li>
            <p className="fors">{dish.directionsstep}</p>
            <ol type="a">
              {dish.directioninstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <p className="note">
              <span className="noted">Note</span>: {dish.note}
            </p>
          </li>
          <div className="line2"></div>
          <li>
            <p className="fors">{dish.ssauce.name}</p>
            <ol type="a">
              {dish.ssauce.directions[0].instructions.map(
                (instruction, index) => (
                  <li key={index}>{instruction}</li>
                )
              )}
            </ol>
          </li>
          <div className="line2"></div>
          <li>
            <p className="fors">{dish.fish.name}</p>
            <ol type="a">
              {dish.fish.directions[0].instructions.map(
                (instruction, index) => (
                  <li key={index}>{instruction}</li>
                )
              )}
            </ol>
          </li>
          <div className="line2"></div>
        </ol>
      </div>
      <div className="related-recipes">
        <h2>You may like these recipes too</h2>
        <RecipePageFoodlist />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Fooddetails2;
