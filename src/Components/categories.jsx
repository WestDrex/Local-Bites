import React from "react";
import "../Components/categories.css";
import CategoriesData from "../categoriesdata";

export default function Categories() {
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="categories-section">
        {CategoriesData.map((category) => (
          <div className="categories-card" key={category.id}>
            <img
              src={category.imgSrc}
              alt={category.foodname}
              className="category-image"
            />
            <div className="categories-card-content">
              <p className="categories-card-title">{category.foodname}</p>
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
