import { useState } from "react";
import HeroImage from "./Components/hero-image";
import HowItWorks from "./Components/how-it-works";
import Categories from "./Components/categories";
import PlacesSection from "./Components/places";

import DishesSection from "./Components/eatlocal";
import Testimonial from "./Components/testimonial";
import HomeFooter from "./Components/homeFooter";


export default function App() {
  return (
    <>
      <HeroImage />
      <HowItWorks />
      <Categories />
      <PlacesSection />
      <DishesSection />
      <Testimonial />
      <HomeFooter />


    </>
  );
}
