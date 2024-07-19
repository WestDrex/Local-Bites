import { useState } from "react";
import HeroImage from "./Components/hero-image";
import HowItWorks from "./Components/how-it-works";
import Categories from "./Components/categories";
import PlacesSection from "./Components/places";

export default function App() {
  return (
    <>
      <HeroImage />
      <HowItWorks />
      <Categories />
      <PlacesSection />
    </>
  );
}
