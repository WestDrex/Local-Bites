import React from "react";
import RecipePageFoodlist from "./RecipePageFoodlist";

const MultipleFoodlists = () => {
  const numberOfFoodlists = 5; // Set the number of times you want to render RecipePageFoodlist
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
