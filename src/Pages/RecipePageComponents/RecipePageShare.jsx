import React from "react";
import vegRight from "../../assets/Images/Photo.png";
import vegLeft from "../../assets/Images/veggie.png";
import "../RecipePageComponents/RecipePageShare.css";
import { Link } from "react-router-dom";

export default function RecipePageShare() {
  return (
    <div className="friendShare">
      <div className="shareContainer">
        <div className="midText">
          <h1>
            Help a friend!
            <br />
            Share a recipe or a restaurant!
          </h1>
          <p>
            Sign into our website to share a recipe or a resturant location to
            <br />
            help others discover the hidden gems of nigerian cuisine.
          </p>
          <button>Sign In</button>
        </div>
        <img className="vegLeft" src={vegLeft} alt="veggies" />
        <img className="vegRight" src={vegRight} alt="salad" />
      </div>
    </div>
  );
}
