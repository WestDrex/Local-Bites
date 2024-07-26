import React from "react";
import RecipePageFoodlist from "./RecipePageFoodlist";
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

  return (
    <div>
      {headers.map((header, index) => (
        <RecipePageFoodlist key={index} title={header} />
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
