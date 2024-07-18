import React from "react";
import SearchBar from "./searchbar";
import "../Components/hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <h1>Local Bites</h1>
      <p>Food for you and me</p>
      <SearchBar />
    </section>
  );
}
