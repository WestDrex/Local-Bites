import React from "react";
import "../Components/categories.css";
import CategoriesData from "../categoriesdata";
import staple from "../assets/Images/staple.png";
import salad from "../assets/Images/salad.png";
import soups from "../assets/Images/soups.png";
import snacks from "../assets/Images/snacks.png";
import kebab from "../assets/Images/kebab.png";

export default function Categories() {
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="categories">
        {CategoriesData.map((category) => (
          <div className="card" key={category.id}>
            <img
              src={category.imgSrc}
              alt={category.foodname}
              className="category-image"
            />
            <div className="card-content">
              <p className="card-title">{category.foodname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <section className="categories-containers">
//       <h1 className="categories-header">Categories</h1>
//       <div className="categories">
//         <div className="category">
//           <img src={staple} alt="staple-foods" className="staplefoods" />
//           <div className="card-content">
//             <p className="card-title">Stapple Food</p>
//           </div>
//         </div>
//         <div className="category">
//           <img src={soups} alt="staple-foods" className="soups" />
//           <button className="food-container">Soups/Stews</button>
//         </div>
//         <div className="category">
//           <img src={salad} alt="staple-foods" className="salad" />
//           <button className="food-container">Salads/Sides</button>
//         </div>
//         <div className="category">
//           <img src={kebab} alt="staple-foods" className="kebab" />
//           <button className="food-container">Street Foods</button>
//         </div>
//         <div className="category">
//           <img src={snacks} alt="staple-foods" className="snacks" />
//           <button className="food-container">Snacks</button>
//         </div>
//       </div>
//     </section>
