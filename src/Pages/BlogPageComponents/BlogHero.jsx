import React from "react";
import Search from "../../../public/Images/srchButton.png";

import "../BlogPageComponents/BlogHero.css";

import { Link } from "react-router-dom";

export default function BlogHero() {
  return (
    <div className="BlogHeroConatiner">
      <div className="BlogHeroContent">
        <h1>
          Exposing the Beauty and Culture
          <br /> of Nigeria through delicious <br />
          Cuisine
        </h1>
        <form className="blogSearch" action="">
          <img className="searchButton" src={Search} alt="search-button" />
          <input
            className="blogSearchText"
            type="text"
            placeholder="Search Articles"
            name="search"
          />
          <button className="blogSearchButton" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
