import React from "react";
import stopwatch from "../../../public/assets/Images/timer.png";
import cutlery from "../../../public/assets/Images/forkknife.png";
import icon from "../../../public/assets/Images/Ellipse 2.png";
import play from "../../../public/assets/Images/PlayCircle.png";
import jollof from "../../../public/assets/Images/image 44.png";
import "../RecipePageComponents/RecipePageHero.css";

export default function RecipePageHero() {
  return (
    <div className="recipeHero">
      <div className="heroConatainer">
        <h1>Meal of the Day!</h1>

        <div className="heroContent">
          <div className="leftHero">
            <div className="leftUp">
              <h2>Delicious Jollof Rice with chicken</h2>
              <p>
                The name "jollof" originates from a Senegambian kingdom called
                <br />
                the Jolof Empire. It's said that French colonizers brought
                broken
                <br />
                rice from Indochina to replace current food crops in the region.
              </p>
              <div className="buttonContainer">
                <button className="upButton">
                  <img className="watch" src={stopwatch} alt="stopwatch" />
                  30 Minuites
                </button>
                <button className="upButton">
                  <img className="cutlery" src={cutlery} alt="fork-knife" />
                  Staple Food
                </button>
              </div>
            </div>

            <div className="leftDown">
              <div className="leftUser">
                <img className="user1" src={icon} alt="icon" />
                <div className="iconName">
                  <h3>Christiana Vee</h3>
                  <h4>17 July 2024</h4>
                </div>
              </div>

              <div className="rightDown">
                <button>
                  View Recipe
                  <img className="playButton" src={play} alt="playButton" />
                </button>
              </div>
            </div>
          </div>
          <img className="jollof" src={jollof} alt="rice" />
        </div>
      </div>
    </div>
  );
}
