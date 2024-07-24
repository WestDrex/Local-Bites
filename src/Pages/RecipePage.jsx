import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import RecipePageHero from "./RecipePageComponents/RecipePageHero";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodDetailPage from "./RecipeDetailsComponents/FoodDetailsPage";

// import RecipePageFoodlist from "./RecipePageComponents/RecipePageFoodlist";
import RecipePageShare from "./RecipePageComponents/RecipePageShare";
import MultipleFoodlists from "./RecipePageComponents/Multifoodlist";
import FoodlistNav from "./RecipePageComponents/FoodlistNav";
import "../Styles/RecipePage.css";

export default function RecipesPage() {
  return (
    <div>
      <Navbar />
      <RecipePageHero />
      <FoodlistNav />
      <MultipleFoodlists />

      <RecipePageShare />
      <HomeFooter />
    </div>
  );
}
