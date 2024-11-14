import React from "react";
import './courseViewToSubscribe.css';
import NavBar from './NavBar';
import NavBarLogged from "./NavBarLogged";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Card() {
    const location = useLocation();  
    const { course } = location.state || {};
    const { user, isAuthenticated, logout } = useAuth();  // Obtenemos el `user` desde el contexto
    const [isEnrolled, setIsEnrolled] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const navigate = useNavigate();  

    const handleLogout = () => {
        logout();  
        navigate('/'); 
    };

    const subscribe = async () => {
        const studentId = user.studentId;
        const grade = 0;

        if (!isAuthenticated) {
            toast.error("Debes estar autenticado para inscribirte.");
            return;
        }

        if (!course || !course.courseId) {
            toast.error("Curso no disponible.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/studentcoursegrade/check-enrollment/${studentId}/${course.courseId}`);
            setIsEnrolled(response.data);
            if (response.data === true) {
                toast.error("Ya estas registrado en el curso!");
            } else {
                try{
                    const response = await axios.post(`http://localhost:8080/api/studentcoursegrade/add/${studentId}/${course.courseId}/${grade}`);
                    if(response.status === 201){
                        toast("Bienvenido al curso!");
                        setIsSubscribed(true);
                    }
                }   catch(error)   {
                    toast.error("Error al registrarte al curso");
                }
            }
        } catch (error) {
            console.error("Error al obtener la informacion", error);
        }
    };


    return (
        <div className="courseToSubscribeContainer">
            {isAuthenticated ? (
                <>
                    <NavBarLogged />
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
                            <button onClick={subscribe} className={isSubscribed ? 'suscribedButton' :  ''} disabled={isSubscribed}>Subscribirse al curso</button>
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
            {}
            <ToastContainer />
        </div>
    );
}

export default Card;
