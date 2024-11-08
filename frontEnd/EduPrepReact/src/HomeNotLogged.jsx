import React, { useEffect } from "react";
import "./HomeNotLogged.css";

const HomeNotLogged = () => {
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
                <h1>EduPrep</h1>
                <h2>Recomendamos un taller en base a resultados de tus cursos</h2>
                <h3>Adquiere conocimientos completando cursos en esta plataforma y especializate en uno de ellos</h3>
                <button>Registrate</button>
            </div>
            <div className="right hidden">
                <img src="./src/assets/students.png" className="overlay" width="350px" height="350px"/>
                <img src="./src/assets/pattern.png" width="250px" height="250px"/>
            </div>
        </div>
    );
};

export default HomeNotLogged;