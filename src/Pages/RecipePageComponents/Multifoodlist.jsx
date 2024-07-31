import React from "react";
import RecipePageFoodlist from "./RecipePageFoodlist";
import FoodDetailPage from "../RecipeDetailsComponents/FoodDetailsPage";
import RecipeListdata from "./RecipeFoodlistData";

import { Router, Routes, Route } from "react-router-dom";

const MultipleFoodlists = () => {
  return (
    <div>
      <RecipePageFoodlist title="Staple Foods" category="stapleFoods" />
      <RecipePageFoodlist title="Soups & Stews" category="soupsStews" />
      <RecipePageFoodlist title="Salads & Sides" category="saladSides" />
      <RecipePageFoodlist title="Street Foods" category="streetFoods" />
      <RecipePageFoodlist title="Snacks" category="snacks" />
    </div>
  );
};

export default MultipleFoodlists;
