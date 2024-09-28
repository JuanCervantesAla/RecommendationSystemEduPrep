import React, { useEffect } from "react";
import "./HomeNotLogged.css";

const HomeNotLogged = () => {
    //Javascript
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []);


    return(
        <div className="containerUpper">
            <div className="left hidden">
                <h1>Comienza-Aprende-Refuerza</h1>
                <h2>En linea, facil y divertido</h2>
                <h3>Aprende en EduPrep, cursa el bachillerato y talleres especiales hechos para ti</h3>
                <button>Registrate</button>
            </div>
            <div className="right hidden">
                <img src="./src/assets/frontimg2.png" width="500px" height="500px"/>
            </div>
        </div>
    );
};

export default HomeNotLogged;