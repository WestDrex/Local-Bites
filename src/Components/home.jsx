import React, { useState } from "react";

import Navbar from "./navbar";
import Hero from "./hero";
import "../Components/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
}
