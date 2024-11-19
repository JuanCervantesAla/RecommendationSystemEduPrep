import React from "react";
import './CardCourse.css';

function Card({ title, description, category, imageUrl, onClick }) {
    return (
        <div className="cardCourse" onClick={onClick} role="button" tabIndex={0}>
            <img src={imageUrl} alt={title} className="cardImage" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    );
}

export default Card;