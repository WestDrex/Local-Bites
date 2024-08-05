import React from "react";
import BlogBackground from "./BlogPageComponents/BlogBackground";
import BlogPopularArticles from "./BlogPageComponents/BlogPopularArticles";
import BlogLatestArticles from "./BlogPageComponents/BlogLatestArticles";

import InfoBanner from "./BlogPageComponents/infobanner";

import BlogShare from "./BlogPageComponents/BlogShare";
import BlogTurn from "./BlogPageComponents/BlogTurn";
import HomeFooter from "../Components/homeFooter";

// import "../Styles/RecipePage.css";

export default function BlogPage() {
  return (
    <div>
      <BlogBackground />

      <BlogPopularArticles />
      <BlogLatestArticles />
      <BlogTurn />
      <BlogShare />
      <HomeFooter />
    </div>
  );
}
