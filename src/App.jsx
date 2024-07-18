import { useState } from "react";
import Navbar from "./Components/navbar";
import HowItWorks from "./Components/how-it-works";
import HeroImage from "./Components/hero-image";

export default function App() {
  return (
    <>
      <Navbar />
      <HowItWorks />
      <HeroImage />
    </>
  );
}
