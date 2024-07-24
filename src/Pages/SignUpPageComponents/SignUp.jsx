import React from "react";
import whiteLogo from "../../assets/Images/Group 21.png";
import rightImg from "../../assets/Images/Rectangle 108.png";
import google from "../../assets/Images/image 37.png";
import "../SignUpPageComponents/SignUp.css";
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

                    <button><img src={google} alt="google logo" />Sign Up With Google</button>

                    <hr /><p>OR</p><hr />

                    <div className="detailBox">
                        <p>Name:</p>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
            </div>

            <div className="signRight">
            <img className="righImg" src={rightImg} alt="icon" />
            </div>
            
        </div>
    )
}
