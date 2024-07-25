import React from "react";
import FriedRice from "../../assets/Images/Rectangle 116.png";
import OfadaStew from "../../assets/Images/Rectangle 117.png";
import VegStew from "../../assets/Images/Rectangle 118.png";
import Akara from "../../assets/Images/Rectangle 119.png";
import MoiMoi from "../../assets/Images/Rectangle 120.png";
import OfadaRice from "../../assets/Images/Rectangle 121.png";
import "../BlogPageComponents/BlogLatestArticles.css";

import { Link } from "react-router-dom";

export default function BlogLatestArticles() {
    return (
        <div className="latestArticlesContainer">
            <h1>Latest Articles</h1>
            <div className="latestArticlesContent">
                <div className="LatestCard">
                    <img src={FriedRice} alt="" />
                    <h3>January 3rd, 2024</h3>
                    <h2>The secret to a delicious 
                        plate of Fried Rice</h2>
                    <p>For that signature fried rice 
                    taste, you'll need to drizzle 
                    in sesame oil and soy sauce. 
                    You can even mix in things like 
                    garlic powder, ginger root, or 
                    Sriracha sauce and chili pepper 
                    for a bit of a kick... <span>Read 
                    more</span></p>
                </div>
                <div className="LatestCard">
                    <img src={OfadaStew} alt="" />
                    <h3>December 21st, 2023</h3>
                    <h2>The hidden benefits that lie 
                        in eating Ofada Stew</h2>
                    <p>It is rich in calcium which 
                        helps to strengthen bones and 
                        prevent osteoporosis and also 
                        helps to reduce inflammation 
                        in the body which can help 
                        reduce joint pain and stiffness 
                        associated with ...<span>
                        Read more</span></p>
                </div>
                <div className="LatestCard">
                    <img src={VegStew} alt="" />
                    <h3>November 1st, 2023</h3>
                    <h2>Vegetable stew with smoked fish</h2>
                    <p>Mixed Vegetable Stew is a popular 
                        dish and differs in preparation. 
                        Yeah! Some prefer it steamed or 
                        fried. Also, it can be eaten with 
                        other subtleties like boiled or fried 
                        yam, beans, or rice... <span>Read more
                        </span></p>
                </div>
                <div className="LatestCard">
                    <img src={Akara} alt="" />
                    <h3>April 6th, 2024</h3>
                    <h2>More to learn and know about Pap 
                        and Akara</h2>
                    <p>Pap is a smooth, porridge-like dish made 
                        from maize or millet, often enjoyed with 
                        a drizzle of milk or sugar. Akara, are 
                        deep-fried bean cakes, crispy on the 
                        outside and soft on the inside... <span>Read 
                        more</span></p>
            </div>
                <div className="LatestCard">
                    <img src={MoiMoi} alt="" />
                    <h3>Feburary 19th, 2024</h3>
                    <h2>Things you didn't know about Moi Moi</h2>
                    <p>This is a steamed or boiled bean pudding 
                        made from a mixture of washed and peeled 
                        beans and onions, fresh red peppers, spices, 
                        and often fish, eggs, and/or crayfish... 
                        <span>Read more</span></p>
            </div>
                <div className="LatestCard">
                    <img src={OfadaRice} alt="" />
                    <h3>June 28th, 2024</h3>
                    <h2>Other Nigerian Delicacies that can be made using Ofada Rice</h2>
                    <p>Ofada rice is an aromatic rice with a unique 
                        flavour and taste. It has a pungent smell 
                        which is derived from its washing and 
                        fermentation process. It is traditionally used
                        to be prepare simple rice and stew... <span>
                        Read more</span></p>
            </div>
            </div>
        </div>
    );
}
