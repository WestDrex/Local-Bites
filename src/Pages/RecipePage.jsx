import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import RecipePageHero from "./RecipePageComponents/RecipePageHero";
import RecipePageFoodlist from "./RecipePageComponents/RecipePageFoodlist";
import RecipePageShare from "./RecipePageComponents/RecipePageShare";
import "../Styles/RecipePage.css";

export default function RecipesPage() {
  return (
    <div>
      <Navbar />
      <RecipePageHero />
      <RecipePageFoodlist />
      <RecipePageShare />
      <HomeFooter />
    </div>
  );
}
