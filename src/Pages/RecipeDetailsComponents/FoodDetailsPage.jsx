import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetailsNav from "./recipedetailsnav";
import Fooddetails2 from "./Fooddetails";

export default function FoodDetailPage() {
  return (
    <div>
      <RecipeDetailsNav />
      <Fooddetails2 />
    </div>
  );
}
