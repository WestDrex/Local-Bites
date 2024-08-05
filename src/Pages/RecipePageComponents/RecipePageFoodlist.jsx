import React from "react";
import "../RecipePageComponents/RecipePageFoodlist.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FoodDetailPage from "../RecipeDetailsComponents/FoodDetailsPage";
// import RecipeListdata from "./RecipeFoodlistData";
import RecipeListdata from "../RecipePageComponents/RecipeFoodlistData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const RecipePageFoodlist = ({ title, category }) => {
  const filteredData = RecipeListdata.filter((dish) => dish.type === category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="foodlist-container">
      <h1 className={"foodlist-title"}>{title}</h1>
      <div className="foodlist-cards">
        <Swiper
          modules={[Navigation]}
          spaceBetween={-30}
          slidesPerView={4}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="foodlist-swiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {filteredData.map((dish) => (
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
                    <Link
                      to={`/fooddetailspage/${dish.id}`}
                      className="foodlist-read-more"
                    >
                      Read More...
                    </Link>
                  </p>
                  <div className="foodlist-rating">
                    {"★".repeat(dish.rating)}
                    {"☆".repeat(5 - dish.rating)}
                  </div>

                  <Link to="/fooddetailspage">
                    <button className="foodlist-content-add-button">+</button>
                  </Link>
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
