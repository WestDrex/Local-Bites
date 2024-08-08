import React from "react";
import whiteLogo from "../../../public/Images/Group 21.png";
import rightImg from "../../../public/Images/Rectangle 108.png";
import google from "../../../public/Images/image 37.png";
import "../SignUpPageComponents/SignUp.css";

import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signUpContainer">
      <div className="signLeft">
        <div className="leftContent">
          <div className="img-container">
            <img className="logoW" src={whiteLogo} alt="icon" />
            <h2>Local Bites</h2>
          </div>

          <div className="topText">
            <h1>Create Your Account</h1>
            <h4>Please Enter Your Details</h4>
          </div>

          <button className="googleButton">
            <img className="google" src={google} alt="google logo" />
            Sign Up With Google
          </button>

          <div className="or">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="formContainer">
            <form>
              <input type="text" placeholder="Name" className="inputField" />
              <input type="email" placeholder="Email" className="inputField" />
              <input
                type="password"
                placeholder="Password"
                className="inputField"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="inputField"
              />
              <button type="submit" className="signInButton">
                Sign In
              </button>
            </form>
          </div>
          <p className="logInText">
            Already have an Account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>

      <div className="signRight">
        <img className="rightImg" src={rightImg} alt="icon" />
      </div>
    </div>
  );
}
