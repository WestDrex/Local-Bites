import React from "react";
import "../RecipePageComponents/RecipePageFoodlist.css";
import { useEffect, useRef } from "react";
// import RecipeListdata from "./RecipeFoodlistData";
import RecipeListdata from "../RecipePageComponents/RecipeFoodlistData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

// SwiperCore.use([Navigation]);

const RecipePageFoodlist = ({ title }) => {
  return (
    <div className="foodlist-container">
      <h1 className="foodlist-title">{title}</h1>
      <div className="foodlist-cards">
        <Swiper
          modules={[Navigation]}
          spaceBetween={-30}
          slidesPerView={4}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="foodlist-swiper"
        >
          {RecipeListdata.map((dish) => (
            <SwiperSlide key={dish.id}>
              <div className="foodlist-main-card">
                {/* <div className="foodlist-main-card" key={dish.id}>     */}
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="foodlist-dish-image"
                />

                <div className="foodlist-card-content">
                  <h4>{dish.name}</h4>
                  <p>
                    {dish.description}
                    <a href="#" className="foodlist-read-more">
                      Read More...
                    </a>
                  </p>
                  <div className="foodlist-rating">
                    {"★".repeat(dish.rating)}
                    {"☆".repeat(5 - dish.rating)}
                  </div>
                  <button className="foodlist-content-add-button">+</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecipePageFoodlist;

//   <div className="food-card">
//         <img src={food.image} alt={food.name} />
//         <div className="food-card-content">
//           <h3>{food.name}</h3>
//           <p>{food.description} <span className="read-more">Read More</span></p>
//           <div className="card-footer">
//             <div className="rating">⭐⭐⭐⭐⭐</div>
//             <div className="plus-icon">+</div>
//           </div>
//         </div>
//       </div>
