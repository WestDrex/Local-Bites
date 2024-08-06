import React from "react";
import "./infobanner.css";
import rucola from "../../../public/assets/Images/rucola-png.png";
import plate from "../../../public/assets/Images/Photo.png";
import freshsalad from "../../../public/assets/Images/freshsalad.png";

export default function InfoBanner() {
  return (
    <div className="info-banner">
      <div className="pagination">
        {[1, 2, 3, 4, 5].map((number) => (
          <button key={number} className="pagination-btn">
            {number}
          </button>
        ))}
        <span className="pagination-more">...</span>
      </div>
      <div className="banner-content">
        <h3>Information isn't yours alone!</h3>
        <h3>Share valuable tips about dishes and places!</h3>
        <p>
          Sign into our website to be able to access our blog allowing you to
          share and receive useful food tips that will help you in your
          day-to-day activities.
        </p>
        <button className="sign-in-btn">Sign In</button>
        {/* <img src={rucola} alt="rucola" className="rucola" /> */}
        <img src={plate} alt="plate" className="plate" />
        <img src={freshsalad} alt="freshsalad" className="freshsalad" />
      </div>
    </div>
  );
}
