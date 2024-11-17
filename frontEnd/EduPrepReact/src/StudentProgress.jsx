import React, { useEffect, useState } from "react";
import "./StudentProgress.css";
import NavBarLogged from './NavBarLogged';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import NavBar from './NavBar';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const StudentProgress = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/studentcoursegrade/progress-complete')
      .then((response) => {
        const coursesWithGrades = response.data.map(item => ({
          course: item.course, 
          grade: item.grade,    
          studentCourseGradeKey: item.studentCourseGradeKey
        }));
        setCompletedCourses(coursesWithGrades);
        console.log(coursesWithGrades);
      })
      .catch((error) => {
        console.error("Fallo al traer los cursos completos", error);
      });
  }, []);

  const recommendedCourses = ["Psicologia", "Databases", "Web Coding"];
  const inProgressCourses = [
    "Matemáticas",
    "Psicologia",
    "Inglés",
    "POO",
    "Historia",
  ];
  // const completedCourses = [
  //   { name: "Geografia 1", grade: 95 },
  //   { name: "Dibujo 2", grade: 85 },
  //   { name: "Ingles 2", grade: 69 },
  //   { name: "Ofimatica", grade: 78 },
  // ];
  const progressData = [
    { name: "Matemáticas", progress: 70 },
    { name: "Español", progress: 25 },
    { name: "Psicologia", progress: 15 },
    { name: "POO", progress: 90 },
    { name: "Historia", progress: 50 },
  ];

  const handleClickCourse = () => {
    navigate('/course');
  };

  return (
    <div className="student-progress">
      <NavBar />
      <h1>PROGRESO DE APRENDIZAJE DEL ESTUDIANTE {user.firstname}</h1>
      <div className="course-sections">
        <CourseBox title="Cursos Recomendados">
          {recommendedCourses.map((course) => (
            <li key={course}>
              {course} <button onClick={handleClickCourse}>Tomar curso</button>
            </li>
          ))}
        </CourseBox>
        <CourseBox title="En Progreso">
          {inProgressCourses.map((course) => (
            <li key={course}>
              {course} <button onClick={handleClickCourse}>Continuar con el curso</button>
            </li>
          ))}
        </CourseBox>
        <CourseBox title="Cursos Completados">
          {completedCourses.map((course) => (
            <li key={course.studentCourseGradeKey.courseId}>
              {course.course.name}
              <span>Calificación: {course.grade}</span>
            </li>
          ))}
        </CourseBox>
      </div>
      <div className="progress-section">
        <h2>Barra de Progreso</h2>
        {progressData.map((course) => (
          <div key={course.name} className="progress-item">
            <span>{course.name}</span>
            <div className="progress-bar-container">
              <div
                className="progress-bar2"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span>{course.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseBox = ({ title, children }) => (
  <div className="course-box">
    <h2>{title}</h2>
    <ul>{children}</ul>
  </div>
);

export default StudentProgress;
