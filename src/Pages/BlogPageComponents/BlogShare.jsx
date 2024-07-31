import React from "react";
import vegRight from "../../assets/Images/Photo.png";
import vegLeft from "../../assets/Images/veggie.png";
import "../BlogPageComponents/BlogShare.css";

export default function BlogShare() {
    return (
        <div className="foodShare">
            <div className="shareContainer">
                <div className="midText">
                    <h1>Information isn’t yours alone!<br/>
                    Share a valuable tips about dishes and places!</h1>
                    <p>Sign into our website to be able to access our 
                        blog allowing you<br/>share and recieve 
                        useful food tips that will help you in 
                        your day-<br/>to-day activities.</p>
                    <button>Sign In</button>
                </div>
            <img className="vegLeft" src={vegLeft} alt="veggies" />
            <img className="vegRight" src={vegRight} alt="salad" />
            </div>
        </div>
    )
}
