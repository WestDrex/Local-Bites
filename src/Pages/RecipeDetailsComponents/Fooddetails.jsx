import React from "react";
import "./Fooddetails.css";
import FooddetailsData from "./FooddetailsData";
import { useParams } from "react-router-dom";
import timer from "../../assets/Images/Timer2.png";
import fire from "../../assets/Images/bi_fire.png";
import snail from "../../assets/Images/snail meat.png";
import peppersoup from "../../assets/Images/peppersoup.png";
import moimoi from "../../assets/Images/moi-moi.png";
import RecipePageFoodlist from "../RecipePageComponents/RecipePageFoodlist";
import HomeFooter from "../../Components/homeFooter";

export default function Fooddetails() {
  const { id } = useParams();
  // const dish = FooddetailsData.find((dish) => dish.id === parseInt(id));
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
      </div>
      <p className="details-description">{dish.mealinfo}</p>
      <div className="ingredients-other-recipes">
        <div className="details-ingredients">
          <h2>Ingredients</h2>
          <h3>{dish.maindish.name}</h3>
          <ul>
            {dish.maindish.ingredients.map((ingredient, index) => (
              <li key={index} className="direction-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3>{dish.sauce.name}</h3>
          <ul>
            {dish.sauce.ingredients.map((ingredient, index) => (
              <li key={index} className="direction-item">
                {ingredient}
              </li>
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
              {dish.directioninstructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p class="note">
              <span className="noted">Note</span>: {dish.note}
            </p>
          </li>
          <div className="line2"></div>
          <li>
            <p className="fors">{dish.ssauce.name}</p>
            <ol type="a">
              {dish.ssauce.ingredients.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
              {/* <li>{dish.ssauce.directions[0].instructions[0]}</li> */}
            </ol>
          </li>
          <div className="line2"></div>
          <li>
            <p className="fors">{dish.fish.name}</p>
            <ol type="a">
              {dish.fish.directions[0].instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
              {/* <li>{dish.fish.directions[0].instructions[0]}</li> */}
            </ol>
          </li>
          <div className="line2"></div>
        </ol>
      </div>
      <div className="related-recipes">
        <h2>You may like these recipes too</h2>
        {/* <RecipePageFoodlist />*/}
      </div>
      <HomeFooter />
    </div>
  );
}
{
  //return (
  //   <div className="details-container">
  //     <div className="details-header">
  //       <h1 className="details-title">{dish.header}</h1>
  //       <button className="details-order-btn">Order</button>
  //     </div>
  //     <div className="details">
  //       <div className="detail-item">
  //         <img src={dish.userimg} alt="Kevin Star" />
  //         <div>
  //           <h4>{dish.username}</h4>
  //           <p>{dish.date}</p>
  //         </div>
  //       </div>
  //       <div className="detail-item">
  //         <img src={timer} alt="timer" />
  //         <div className="time-container">
  //           <h2>PREP TIME</h2>
  //           <p>{dish.preptime}</p>
  //         </div>
  //       </div>
  //       <div className="detail-item">
  //         <img src={timer} alt="timer" />
  //         <div>
  //           <h2>COOK TIME</h2>
  //           <p>{dish.cooktime}</p>
  //         </div>
  //       </div>
  //       <div className="detail-item">
  //         <img src={fire} alt="timer" />
  //         <div>
  //           <h2>DIFFICULTY</h2>
  //           <p>{dish.difficulty}</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="details-image-container">
  //       <img src={dish.displayimg} alt="Bole display Image" />
  //     </div>
  //     <p class="details-description">{dish.mealinfo}</p>
  //     <div class="ingredients-other-recipes">
  //       <div class="details-ingredients">
  //         <h2>Ingredients</h2>
  //         <h3>{dish.maindish.name}</h3>
  //         <ul>
  //           <li>{dish.maindish.ingredients[0]}</li>
  //           <div className="line"></div>
  //           <li>{dish.maindish.ingredients[1]}</li>
  //           <div className="line"></div>
  //         </ul>
  //         <h3>{dish.sauce.name}</h3>
  //         <ul>
  //           {dish.ingredients.map((ingredient, index) => (
  //             <li key={index}>{ingredient}</li>
  //           ))}
  //           <div className="line"></div>
  //         </ul>
  //       </div>
  //       <div class="details-other-recipes">
  //         <h2>Other Recipes</h2>
  //         <div class="details-recipe">
  //           <img src={snail} alt="Snail meat Stew" />
  //           <div>
  //             <h4>Snail meat Stew</h4>
  //             <p>By Andreas Paula</p>
  //           </div>
  //         </div>
  //         <div class="details-recipe">
  //           <img src={peppersoup} alt="Pepper Soup" />
  //           <div>
  //             <h4>Pepper Soup</h4>
  //             <p>By Selena Gomez</p>
  //           </div>
  //         </div>
  //         <div class="details-recipe">
  //           <img src={moimoi} alt="Beans Cake: Moi Moi" />
  //           <div>
  //             <h4>Beans Cake: Moi Moi</h4>
  //             <p>By Living Tombstone</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div class="directions">
  //       <h2>Directions</h2>
  //       <ol>
  //         <li>
  //           <p className="fors">{dish.directionsstep}</p>
  //           <ol type="a">
  //             {dish.directions.map((step, index) => (
  //               <li key={index}>{step}</li>
  //             ))}
  //             {/* <li>{dish.directioninstructions[0]}</li>
  //             <li>{dish.directioninstructions[1]}</li>
  //             <li>{dish.directioninstructions[2]}</li>
  //             <li>{dish.directioninstructions[3]}</li>
  //             <li>{dish.directioninstructions[4]}</li> */}
  //           </ol>
  //           <p class="note">
  //             <span className="noted">Note</span>: {dish.note}
  //           </p>
  //         </li>
  //         <div className="line2"></div>
  //         <li>
  //           <p className="fors">{dish.ssauce.name}</p>
  //           <ol type="a">
  //             <li>{dish.ssauce.directions[0].instructions[0]}</li>
  //             <li>{dish.ssauce.directions[0].instructions[1]}</li>
  //             <li>{dish.ssauce.directions[0].instructions[2]}</li>
  //             <li>{dish.ssauce.directions[0].instructions[3]}</li>
  //             <li>{dish.ssauce.directions[0].instructions[4]}</li>
  //             <li>{dish.ssauce.directions[0].instructions[5]}</li>
  //             <li>{dish.ssauce.directions[0].instructions[6]}</li>
  //           </ol>
  //         </li>
  //         <div className="line2"></div>
  //         <li>
  //           <p className="fors">{dish.fish.name}</p>
  //           <ol type="a">
  //             <li>{dish.fish.directions[0].instructions[0]}</li>
  //             <li>{dish.fish.directions[0].instructions[1]}</li>
  //             <li>{dish.fish.directions[0].instructions[2]}</li>
  //             <li>{dish.fish.directions[0].instructions[3]}</li>
  //             <li>{dish.fish.directions[0].instructions[4]}</li>
  //             <li>{dish.fish.directions[0].instructions[5]}</li>
  //             <li>{dish.fish.directions[0].instructions[6]}</li>
  //             <li>{dish.fish.directions[0].instructions[7]}</li>
  //             <li>{dish.fish.directions[0].instructions[8]}</li>
  //           </ol>
  //         </li>
  //         <div className="line2"></div>
  //       </ol>
  //     </div>
  //     <div class="related-recipes">
  //       <h2>You may like these recipes too</h2>
  //       <RecipePageFoodlist />
  //     </div>
  //     <HomeFooter />
  //   </div>
  // );
}
