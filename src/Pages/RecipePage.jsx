import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import RecipePageHero from "./RecipePageComponents/RecipePageHero";
import RecipePageFoodlist from "./RecipePageComponents/RecipePageFoodlist";
import "../Styles/RecipePage.css";

export default function RecipesPage() {
  return (
    <div>
      <Navbar />
      <RecipePageHero />
      <RecipePageFoodlist />
      <HomeFooter />
    </div>
  );
}
