import React from "react";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer,faFlask, faCalculator, faGear, faHeartPulse, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
    computer: faComputer,
    flask: faFlask,
    calculator: faCalculator,
    gear: faGear,
    pulse: faHeartPulse,
    lightbulb: faLightbulb,
  };

function Card({ title, description, imageUrl , icon, size}){
    return(
        <div className="card">
            {icon && <FontAwesomeIcon icon={iconMap[icon]} size={size} />}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card