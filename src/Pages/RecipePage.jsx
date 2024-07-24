import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import RecipePageHero from "./RecipePageComponents/RecipePageHero";
import FoodlistNav from "./RecipePageComponents/FoodlistNav";
// import RecipePageFoodlist from "./RecipePageComponents/RecipePageFoodlist";
import MultipleFoodlists from "./RecipePageComponents/Multifoodlist";
import "../Styles/RecipePage.css";

export default function RecipesPage() {
  return (
    <div>
      <Navbar />
      <RecipePageHero />
      <FoodlistNav />
      <MultipleFoodlists />
      <HomeFooter />
    </div>
  );
}
