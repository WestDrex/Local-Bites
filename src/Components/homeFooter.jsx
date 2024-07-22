import React from "react";
import "../Components/homeFooter.css";
import logoFooter from "../assets/Images/Group 40.png"
import { Link } from "react-router-dom";

export default function HomeFooter() {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="leftSide">
                    <img src={logoFooter} alt="blog" />
                    <h2>Local</h2>
                    <h3>Bites</h3>
                    <p>Local Bites is a website that aims to aid <br/>
                    the distribution and knowledge of Nigerian<br/>
                    dishes</p>
                </div>

                <div className="rightSide">
                    <div className="left">
                        <ul>
                            <p className="footerHeaderText">Quick Links</p>
                            <li><a href="">Home</a></li>
                            <li><a href="">Food</a></li>
                            <li><a href="">Order</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className="midFoot">
                        <ul>
                            <p className="footerHeaderText">Suppot Us</p>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <p className="footerHeaderText">Help</p>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}