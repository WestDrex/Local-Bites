import React from "react";
import "./Fooddetails.css";
import FooddetailsData from "./FooddetailsData";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import timer from "../../../public/Images/Timer2.png";
import fire from "../../../public/Images/bi_fire.png";
import playbtn from "../../../public/Images/playbtn.png";
// import snail from "../../assets/Images/snail meat.png";
// import peppersoup from "../../assets/Images/peppersoup.png";
// import moimoi from "../../assets/Images/moi-moi.png";
import RecipePageFoodlist from "../RecipePageComponents/RecipePageFoodlist";
import HomeFooter from "../../Components/homeFooter";

export default function Fooddetails() {
  const { id } = useParams();
  // const dish = FooddetailsData.find((dish) => dish.id === parseInt(id));
  const dish = FooddetailsData.find((dish) => dish.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <img src={dish.userimg} alt={dish.username} />
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
          <img src={fire} alt="difficulty" />
          <div>
            <h2>DIFFICULTY</h2>
            <p>{dish.difficulty}</p>
          </div>
        </div>
      </div>
      <div className="details-image-container">
        <img src={dish.displayimg} alt="Dish display" />
        <a href={dish.link} target="_blank">
          <img src={playbtn} alt="play-button" className="playbtn" />
        </a>
      </div>
      <p className="details-description">{dish.mealinfo}</p>
      <div className="ingredients-other-recipes">
        <div className="details-ingredients">
          <h2>Ingredients</h2>
          {dish.maindish && (
            <>
              <h3>{dish.maindish.name}</h3>
              <ul>
                {dish.maindish.ingredients.map((ingredient, index) => (
                  <li key={index} className="direction-item">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </>
          )}
          {dish.sauce && dish.sauce.name && (
            <>
              <h3>{dish.sauce.name}</h3>
              <ul>
                {dish.sauce.ingredients.map((ingredient, index) => (
                  <li key={index} className="direction-item">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </>
          )}
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
          {dish.directionsstep && (
            <li>
              <p className="fors">{dish.directionsstep}</p>
            </li>
          )}
          <ol>
            {dish.directioninstructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p className="note">
            <span className="noted">{dish.notesdisplay}</span> {dish.note}
          </p>
          {dish.ssauce && (
            <li>
              <p className="fors">{dish.ssauce.name}</p>
              <ol>
                {dish.ssauce.ingredients.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </li>
          )}
          {dish.fish && (
            <li>
              <p className="fors">{dish.fish.name}</p>
              <ol>
                {dish.fish.directions[0].instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </li>
          )}
        </ol>
      </div>
      <div className="related-recipes">
        <h2>You may like these recipes too</h2>
      </div>
      <RecipePageFoodlist title={""} category={"stapleFoods"} />
      <HomeFooter />
    </div>
  );
}
