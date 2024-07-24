import React from "react";
import whiteLogo from "../../assets/Images/Group 21.png";
import rightImg from "../../assets/Images/Rectangle 109.png";
import google from "../../assets/Images/image 37.png";
import "./SignUp.css";

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
                        <h1>Welcome Back</h1>
                        <h4>Please Enter Your Details To Access Your Account</h4>
                    </div>

                    <div className="formContainer">
                        <form>
                            <input type="email" placeholder="Email" className="inputField" />
                            <input type="password" placeholder="Password" className="inputField" />
                            <div className="textUnderPassword">
                                <label className="rememberMe">
                                    <input type="checkbox" /> Remember Me
                                </label>
                                <a href="" className="forgotPassword">Forgot Password?</a>
                            </div>
                            <button className="googleButton">
                                <img className="google" src={google} alt="google logo" />Log In With Google
                            </button>
                            <button type="submit" className="signInButton">Log In</button>
                        </form>
                    </div>
                    <p className="logInText">Don't have an Account? <a href="/sign-up">Sign Up</a></p>
                </div>
            </div>

            <div className="signRight">
                <img className="rightImg" src={rightImg} alt="icon" />
            </div>
        </div>
    );
}
