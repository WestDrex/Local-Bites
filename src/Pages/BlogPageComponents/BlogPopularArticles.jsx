import React from "react";
import PuffPuff from "../../assets/Images/Rectangle 112.png";
import Solid from "../../assets/Images/Rectangle 113.png";
import JollofRice from "../../assets/Images/Rectangle 114.png";
import PepperSoup from "../../assets/Images/Rectangle 115.png";
import "../BlogPageComponents/BlogPopularArticles.css";

import { Link } from "react-router-dom";

export default function BlogPopularArticles() {
    return (
        <div className="popularArticlesSection">
            <h3>Popular Articles</h3>
            <div className="popularArticlesContent">
                <div className="leftArticle">
                    <img src={PuffPuff} alt="delicious-puffpyff" />
                    <p className="puffDate">October 6th, 2023</p>
                    <h2>Full Guide to Becoming a Professional Chef</h2>
                    <p className="puffDescription">How do you become a chef? It’s 
                        a little more complicated than 
                        simply learning a few basic 
                        recipes, declaring yourself a 
                        “chef,” and going out to look for 
                        a job...</p>
                    <h5>Read more</h5>
                </div>
                <div className="rightArticle">
                    <div className="rightArticleCard">
                            <img src={Solid} alt="solid :)" />
                        <div className="cardDeets">
                            <p className="rightArticleDate">September 16th, 2023</p>
                            <h2 className="rightArticleHeader">10 Vegetarian Recipes To Eat This Month</h2>
                            <p className="rightArticleDescription">A 
                                vegetarian diet is one that does not 
                                include any meat or seafood. However, 
                                there are many variations to this, 
                                some people following a vegetarian 
                                diet may eat eggs and dairy foods, 
                                while others may avoid one or both... <span className="orangeSpan">Read more</span></p>
                        </div>
                    </div>
                    <div className="rightArticleCard">
                            <img src={JollofRice} alt="juicy jollof" />
                        <div className="cardDeets">
                            <p className="rightArticleDate">August 25th, 2023</p>
                            <h2 className="rightArticleHeader">The secret to a delicious Jollof Rice</h2>
                            <p className="rightArticleDescription">Jollof rice
                                 shouldn't really be boiled, rather it should be 
                                infused with steam. When cooking, make sure you 
                                use equal parts of water and rice. Never let the 
                                water drown the rice. Use the same measure for 
                                both and let the steam do its part... <span className="orangeSpan">Read more</span></p>
                        </div>
                    </div>
                    <div className="rightArticleCard">
                            <img src={PepperSoup} alt="catfish pepper soup" />
                        <div className="cardDeets">
                            <p className="rightArticleDate">July 30th, 2024</p>
                            <h2 className="rightArticleHeader">Simple and Tasty fish Pepper Soup</h2>
                            <p className="rightArticleDescription">Catfish pepper 
                                soup also relieves cough and helps to clear to 
                                phlegm in the throat. It is very rich in fibres 
                                which promotes digestion and aids gut health and 
                                it prevents dehydration because it is rich in water 
                                and other minerals... <span className="orangeSpan">Read more</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
