import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import "../Components/home.css";
import HomePage from "../Pages/Homepage";
import RecipesPage from "../Pages/RecipePage";
import OrderPage from "../Pages/OrderPage";
import BlogPage from "../Pages/BlogPage";
import SignUpPage from "../Pages/SignupPage";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
}
