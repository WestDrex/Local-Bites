import React from "react";
import "../Components/homeFooter.css";
import logoFooter from "../assets/Images/Group 40.png";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";

export default function HomeFooter() {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="leftSide">
          <img src={logoFooter} alt="blog" />
          <h2>Local</h2>
          <h3>Bites</h3>
          <p>
            Local Bites is a website that aims to aid <br />
            the distribution and knowledge of Nigerian
            <br />
            dishes
          </p>
        </div>

        <div className="rightSide">
          <div className="left">
            <ul>
              <p className="footerHeaderText">Quick Links</p>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/recipe  ">Food</a>
              </li>
              <li>
                <a href="/order">Order</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="midFoot">
            <ul>
              <p className="footerHeaderText">Support Us</p>
              <li>
                <a href="https://x.com" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <p className="footerHeaderText">Help</p>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
