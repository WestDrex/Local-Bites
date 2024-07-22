import { useState } from "react";
import HeroImage from "./Components/hero-image";
import HowItWorks from "./Components/how-it-works";
import Categories from "./Components/categories";
import PlacesSection from "./Components/places";
import DishesSection from "./Components/eatlocal";

export default function App() {
  return (
    <>
      <HeroImage />
      <HowItWorks />
      <Categories />
      <PlacesSection />
      <DishesSection />
    </>
  );
}
