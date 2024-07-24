import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import RecipePageHero from "./RecipePageComponents/RecipePageHero";
<<<<<<< HEAD
import FoodlistNav from "./RecipePageComponents/FoodlistNav";
// import RecipePageFoodlist from "./RecipePageComponents/RecipePageFoodlist";
import MultipleFoodlists from "./RecipePageComponents/Multifoodlist";
=======
import RecipePageFoodlist from "./RecipePageComponents/RecipePageFoodlist";
import RecipePageShare from "./RecipePageComponents/RecipePageShare";
>>>>>>> 551e229899d2be74df6ad6b618f013953c09f6a9
import "../Styles/RecipePage.css";

export default function RecipesPage() {
  return (
    <div>
      <Navbar />
      <RecipePageHero />
<<<<<<< HEAD
      <FoodlistNav />
      <MultipleFoodlists />
=======
      <RecipePageFoodlist />
      <RecipePageShare />
>>>>>>> 551e229899d2be74df6ad6b618f013953c09f6a9
      <HomeFooter />
    </div>
  );
}
