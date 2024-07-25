import React from "react";
import "../BlogPageComponents/BlogBackground.css";
import Navbar from "../../Components/navbar";

import BlogHero from "./BlogHero";
export default function BlogBackground() {
  return (
    <div className="blogbackground">
      <Navbar />
      <BlogHero />
    </div>
  );
}
