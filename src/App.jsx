import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeroImage from "./Components/hero-image";
import HowItWorks from "./Components/how-it-works";
import Categories from "./Components/categories";
import PlacesSection from "./Components/places";
import DishesSection from "./Components/eatlocal";
import Testimonial from "./Components/testimonial";
import HomeFooter from "./Components/homeFooter";
import HomePage from "./Pages/Homepage";
import RecipesPage from "./Pages/RecipePage";
import FoodDetailPage from "./Pages/RecipeDetailsComponents/FoodDetailsPage";
import OrderPage from "./Pages/OrderPage";
import BlogPage from "./Pages/BlogPage";
import SignUp from "./Pages/SignUpPageComponents/SignUpPage";
import MultipleFoodlists from "./Pages/RecipePageComponents/Multifoodlist";
import RecipePageFoodlist from "./Pages/RecipePageComponents/RecipePageFoodlist";
import RecipeListdata from "./Pages/RecipePageComponents/RecipeFoodlistData";
import LogInPage from "./Pages/LoginPage";

// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroImage />
            <HowItWorks />
            <Categories />
            <PlacesSection />
            <DishesSection />
            <Testimonial />
            <HomeFooter />
          </>
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe" element={<RecipesPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route
        path="/"
        element={
          <RecipePageFoodlist
            title="Staple Foods"
            data={RecipeListdata.stapleFoods}
          />
        }
      />
      {/* <p>remove above later</p> */}

      <Route path="/fooddetailspage/:id" element={<FoodDetailPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
