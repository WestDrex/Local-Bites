import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetailsNav from "./recipedetailsnav";
import Fooddetails from "./Fooddetails";
import RecipePageFoodlist from "../RecipePageComponents/RecipePageFoodlist";

export default function FoodDetailPage() {
  return (
    <div>
      <RecipeDetailsNav />
      <Fooddetails />
      <RecipePageFoodlist />
    </div>
  );
}
