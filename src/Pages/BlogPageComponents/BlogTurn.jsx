import React from "react";
import "../BlogPageComponents/BlogTurn.css";

import { Link } from "react-router-dom";

export default function BlogTurn() {
    return (
        <div className="BlogTurnContainer">
            <div className="ButtonContainer">
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button >4</button>
                <button >5</button>
                <button >...</button>
            </div>
        </div>
    );
}
