import React from "react";
// import whiteLogo from "../../src/assets/Images/Group 21.png";
import whiteLogo from "../../public/Images/Group 21.png";
// import rightImg from "../../src/assets/Images/Rectangle 109.png";
import rightImg from "../../public/Images/Rectangle 109.png";
// import google from "../../src/assets/Images/image 37.png";
import google from "../../public/Images/image 37.png";

import "./LogInPageComponents/LogInPage.css";

import { Link } from "react-router-dom";

export default function LogInPage() {
  return (
    <div className="signUpContainer">
      <div className="signLeft">
        <div className="leftContent">
          <div className="img-container">
            <img className="logoW" src={whiteLogo} alt="icon" />
            <h2>Local Bites</h2>
          </div>

          <div className="topText">
            <h1>Welcome Back</h1>
            <h4>Please Enter Your Details To Access Your Account</h4>
          </div>

          <div className="formContainer">
            <form>
              <input type="email" placeholder="Email" className="inputField" />
              <input
                type="password"
                placeholder="Password"
                className="inputField"
              />
              <div className="textUnderPassword">
                <label className="rememberMe">
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="" className="forgotPassword">
                  Forgot Password?
                </a>
              </div>
              <button className="googleButton">
                <img className="google" src={google} alt="google logo" />
                Log In With Google
              </button>

              <Link className="linkstyles" to="/">
                <button type="submit" className="signInButton">
                  Log In
                </button>
              </Link>
            </form>
          </div>
          <p className="logInText">
            Don't have an Account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      <div className="signRight">
        <img className="rightImg" src={rightImg} alt="icon" />
      </div>
    </div>
  );
}
