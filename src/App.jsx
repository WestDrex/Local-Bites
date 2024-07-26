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

import LogInPage from "./Pages/LoginPage";

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
      <Route path="/recipe" element={<RecipesPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/fooddetailspage/:id" element={<FoodDetailPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
