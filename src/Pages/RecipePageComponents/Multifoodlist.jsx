import React from "react";
import RecipePageFoodlist from "./RecipePageFoodlist";
import RecipeListdata from "./RecipeFoodlistData";
import FoodDetailPage from "../RecipeDetailsComponents/FoodDetailsPage";

import { Router, Routes, Route } from "react-router-dom";

const MultipleFoodlists = () => {
  const numberOfFoodlists = 5;
  const headers = [
    "Staple Foods",
    "Soups/Stews",
    "Salad/Sides",
    "Street Foods",
    "Snacks",
  ];

  const datasets = [
    RecipeListdata.stapleFoods,
    RecipeListdata.soupsStews,
    RecipeListdata.saladSides,
    RecipeListdata.streetFoods,
    RecipeListdata.snacks,
  ];

  return (
    <div>
      {headers.map((header, index) => (
        <RecipePageFoodlist key={index} title={header} data={datasets[index]} />
      ))}
    </div>
  );
};

//   return (
//     <div>
//       {Array.from({ length: numberOfFoodlists }).map((_, index) => (
//         <RecipePageFoodlist key={index} title={header}/>
//       ))}
//     </div>
//   );
// };

export default MultipleFoodlists;
