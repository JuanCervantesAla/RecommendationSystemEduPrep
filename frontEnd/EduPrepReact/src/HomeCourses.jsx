import React, { useEffect } from "react";
import './HomeCourses.css';
import Card from './Card.jsx';
import UserCard from './UserCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faCalculator, faGear, faHeartPulse, faLightbulb } from '@fortawesome/free-solid-svg-icons';


const HomeCourses = () => {
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


    //Html
    return(

        <div className="container">
            <section className="textCourse hidden">
                <h1> Nuestros cursos</h1>
                <h2> Encuentra un curso en base a tus caracteristicas</h2>
            </section>

            <section className="bubble hidden">
                <Card
                  title="Informatica"
                  description="Crea soluciones de computadora"
                  icon="computer"
                  size="3x"
                />
                <Card
                  title="Ciencias"
                  description="Aprende de quimica y el mundo"
                  icon="flask"
                  size="3x"
                />
                <Card
                  title="Matematicas"
                  description="Refuerza y aprende matematicas"
                  icon="calculator"
                  size="3x"
                />
                <Card
                  title="Mecanica"
                  description="Como funciona la mecanica moderna"
                  icon="gear"
                  size="3x"
                />
                <Card
                  title="Biomedica"
                  description="Integra la computacion y medicina"
                  icon="pulse"
                  size="3x"
                />
                <Card
                  title="Electronica"
                  description="Innova con la electricidad y luz"
                  icon="lightbulb"
                  size="3x"
                />
            </section>

            <section className="hidden">
                <h1>Testimonios</h1>
                <h2>Ver las opiniones de nuestros alumnos</h2>
                <section className="people hidden">
                  <UserCard
                  title="Joahn Sebastian"
                  description=' "Me encanta el software, pude concluir mi preparatoria!" '
                  imageUrl="./src/assets/man1.jpg"
                  />

                  <UserCard
                  title="Lucia Hernandez"
                  description=' "Nunca me habia sentido tan preparada laboralmente!" '
                  imageUrl="./src/assets/woman1.jpg"
                  />

                  <UserCard
                  title="Pablo Buenrostro"
                  description=' "Pude reforzar los conocimientos de la facultad!" '
                  imageUrl="./src/assets/nerd1.jpg"
                  />

                  <UserCard
                  title="Jose Jose Cano"
                  description=' "Soy el mejor de mi trabajo con estos conocimientos" '
                  imageUrl="./src/assets/man2.jpg"
                  />
                </section>
            </section>
        </div>

    );
};

export default HomeCourses