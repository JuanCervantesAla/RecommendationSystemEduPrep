import React from "react";
import './CardCourse.css';

function Card({ title, description, category}){
    return(
        <div className="cardCourse">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    );
}
export default Card