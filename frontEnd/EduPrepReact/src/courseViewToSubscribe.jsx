import React from "react";
import './courseViewToSubscribe.css';
import NavBar from './NavBar';
import NavBarLogged from "./NavBarLogged";
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext';

function Card() {
    const location = useLocation();  
    const { course } = location.state || {};
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();  

    const handleLogout = () => {
        logout();  
        navigate('/'); 
    };

    return (
        <div className="courseToSubscribeContainer">
            {isAuthenticated ? (
                <>
                    <NavBarLogged />
                    <button onClick={handleLogout}>Cerrar sesión</button> {}
                </>
            ) : (
                <NavBar />
            )}
            <div className="courseContainer">
                {course ? (
                    <>
                        <div className="courseText">
                            <h1 id="eduprep">EduPrep - <FontAwesomeIcon icon={faBook} size="lg" /></h1>
                            <br/>
                            <hr/>
                            <h1>{course.name}</h1>
                            <br/>
                            <p>{course.textintroduction}</p>
                            <br/>
                            <span>Categoria: {course.category}</span>
                            <br/>
                            <br/>
                            <button>Subscribirse al curso</button>
                        </div>
                        <div className="coursecardCourse">
                            <h3>Certificado profesional al terminar las lecciones</h3>
                            <p>Consigue un certificado que avale tus conocimientos</p>
                            <hr/>
                            <div>
                                <p>
                                    <FontAwesomeIcon icon={faMountain} size="lg" />
                                    Dificultad:{" "}
                                    {course.difficult > 50 ? (
                                        <>
                                            Alta
                                            <br />
                                            (Pre-conocimientos necesarios)
                                        </>
                                    ) : (
                                        <>
                                            Baja
                                            <br />
                                            (Aprendizaje simple)
                                        </>
                                    )}
                                </p>
                            </div>
                            <br/>
                            <div>
                                <p>
                                    <FontAwesomeIcon icon={faMountain} size="lg" />
                                    Duracion : {course.timedurationmonth} meses
                                </p>
                            </div>
                            <br/>
                            <div>
                                <p>
                                    <FontAwesomeIcon icon={faMountain} size="lg" />
                                    Lecciones : {course.howManyLesson} lecciones
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No se encontró el curso.</p>
                )}
            </div>
        </div>
    );
}

export default Card;
