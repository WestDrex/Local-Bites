import React from "react";
import "../Components/testimonial.css";
import stars from "../assets/Images/rating.png"
import pic1 from "../assets/Images/Ellipse 9.png"
import pic2 from "../assets/Images/Ellipse 10.png"
import pic3 from "../assets/Images/Ellipse 11.png"
import { Link } from "react-router-dom";

export default function Testimonial() {
    return (
        <div className="testimonial-section">
            <h1>Testimonials</h1>

            <div className="comments">
                <div className="top">
                    <div className="text">
                        <h2>Martha Collins</h2>
                        <p>Lorem ipsum dolor sit amet 
                            consectetur. Ac volutpat 
                            nisl ut leo. Et interdum 
                            nisi consequat eu<br/>pellentesque 
                            sed pharetra morbi. Sed lectus 
                            ullamcorper urna in egestas. 
                            Lorem ipsum dolor<br/>sit amet 
                            consectetur. Leo mauris fringilla 
                            condimentum et suspendisse nisl 
                            lacus non.<br/></p>
                            <h4>Read More</h4>
                            <img src={stars} alt="rating-star" />
                    </div>
                        
                    <div className="lady-pic">
                        <img src={pic1} alt="lady-1"/>
                    </div>
                </div>

                <div className="middle">
                    <div className="text">
                    <h2>Martha Collins</h2>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur. Ac volutpat 
                        nisl ut leo. Et interdum 
                        nisi consequat eu<br/>pellentesque 
                        sed pharetra morbi. Sed lectus 
                        ullamcorper urna in egestas. 
                        Lorem ipsum dolor<br/>sit amet 
                        consectetur. Leo mauris fringilla 
                        condimentum et suspendisse nisl 
                        lacus non.<br/></p>
                        <h4>Read More</h4>
                    <img className="mid-star" src={stars} alt="rating-star" />
                    </div>
                    <div className="lady-pic">
                        <img src={pic2} alt="lady-2"/>
                    </div>
                </div>

                <div className="bottom">
                    <div className="text">
                    <h2>Martha Collins</h2>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur. Ac volutpat 
                        nisl ut leo. Et interdum 
                        nisi consequat eu<br/>pellentesque 
                        sed pharetra morbi. Sed lectus 
                        ullamcorper urna in egestas. 
                        Lorem ipsum dolor<br/>sit amet 
                        consectetur. Leo mauris fringilla 
                        condimentum et suspendisse nisl 
                        lacus non.<br/></p>
                        <h4>Read More</h4>
                    <img src={stars} alt="rating-star" />
                    </div>

                    <div className="lady-pic">
                        <img src={pic3} alt="lady-3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
