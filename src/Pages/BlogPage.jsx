import React from "react";
import BlogBackground from "./BlogPageComponents/BlogBackground";
import BlogPopularArticles from "./BlogPageComponents/BlogPopularArticles";
import BlogLatestArticles from "./BlogPageComponents/BlogLatestArticles";
import InfoBanner from "./BlogPageComponents/infobanner";
// import "../Styles/RecipePage.css";

export default function BlogPage() {
  return (
    <div>
      <BlogBackground />
      <BlogPopularArticles />
      <BlogLatestArticles />
      <InfoBanner />
    </div>
  );
}
