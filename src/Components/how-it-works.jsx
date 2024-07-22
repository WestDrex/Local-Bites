import React from "react";
import chicken from "../assets/Images/turkey.png"
import form from "../assets/Images/order.png"
import blog from "../assets/Images/blog.png"
import topCircle from "../assets/Images/Vector 15.png"
import bottomCircle from "../assets/Images/Ellipse 19.png"
import '../Components/how-it-works.css'


export default function HowItWorks() {
    return(
        <div className="how-it-works-section">
            <div className="howItWorks-top">
                <h1>How It Works</h1>
                <p>Local Bites is a website that 
                    serves as an online cook book 
                    and ordering service that mains 
                    on<br/>Nigerian Dishes and cuisine 
                    so for your full enjoyment of this 
                    website we ask that you learn<br/>
                    how to fully navigate and utilise 
                    the Local Bites Website Page. Thank 
                    you.</p>
                    
                    <img className="topCircle" src={topCircle} alt="circle on right" />
                    <img className="bottomCircle" src={bottomCircle} alt="circle on left" />
            </div>

            <div className="three-cards">
                <div className="recipe">
                    <img className="no-1" src={chicken} alt="chicken" />
                    <h2>Recipe</h2>
                    <p>Check out our Recipe page to<br/> 
                        unlock your inner chef and turn<br/> 
                        your own home into a restaurant.<br/>
                        <br/> 
                        Filled with different recipes 
                        for you<br/>to try and historical 
                        places to<br/>discover their unique 
                        dishes</p>
                </div>

                <div className="order">
                    <img className="no-2" src={form} alt="order" />
                    <h2>Order</h2>
                    <p>Check out our Order page, to tired<br/>or 
                        lack the ingredients needed to<br/>make 
                        the dish you want? Order it<br/>online 
                        from the in the order page.<br/>
                        <br/>
                        Filled with different places and<br/>giving 
                        you the fastest route to your<br/>location, 
                        to enjoy your favourite meal.</p>
                </div>

                <div className="blog">
                    <img className="no-3" src={blog} alt="blog" />
                    <h2>Blog</h2>
                    <p>Check out our Blog page to<br/>discover all the 
                        latest food news.<br/>from the best places to 
                        eat to<br/>where to find the cheapest<br/>ingredients 
                        for your next dish.<br/>
                        <br/>
                        Filled with different news that will<br/>surely be 
                        useful for your food<br/>journey.</p>
                </div>
            </div>

        </div>
    );
}