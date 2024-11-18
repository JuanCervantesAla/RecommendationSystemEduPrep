import React from "react";
import './UserCard.css';

function UserCard({ title, description, imageUrl}){
    return(
        <div className="userCard">
            <img className="card-image" src={imageUrl} alt="Image Here?"></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default UserCard