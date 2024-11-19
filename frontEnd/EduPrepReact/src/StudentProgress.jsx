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
  const [progressData, setProgressData] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/studentcoursegrade/progress-complete')
      .then((response) => {
        const coursesWithGrades = response.data.map(item => ({
          course: item.course, 
          grade: item.grade,    
          studentCourseGradeKey: item.studentCourseGradeKey
        }));
        setCompletedCourses(coursesWithGrades);
      })
      .catch((error) => {
        console.error("Fallo al traer los cursos completos", error);
      });

      axios.get('http://localhost:8080/api/studentcoursegrade/on-progress')
      .then((response) => {
        const coursesWithProgress = response.data.map(item => ({
          course: item.course, 
          progress: item.progress,    
          studentCourseGradeKey: item.studentCourseGradeKey
        }));
        setProgressData(coursesWithProgress);
      })
      .catch((error) => {
        console.error("Fallo al traer los cursos completos", error);
      });

      axios.get(`http://localhost:8080/api/recommendation/${user.studentId}`)
        .then((response) => {
          setRecommendedCourses(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Fallo al traer los cursos recomendados", error);
        });



  }, []);

  const handleClickCourse = () => {
    navigate('/course');
  };

  const getCertificate = (course) => {
    navigate('/certificate', { state: { course } }); // Pasar el curso como state
  };

  return (
    <div className="student-progress">
      {isAuthenticated ? (
        <NavBarLogged />
      ) : (
        <NavBar />
      )}
      <h1>PROGRESO DE APRENDIZAJE DEL ESTUDIANTE {user.firstname}</h1>
      <div className="course-sections">
        <CourseBox title="Cursos Recomendados">
          {recommendedCourses.map((course) => (
            <li key={course.courseId}>
              {course.name} <button onClick={() => handleContinueCourse(course.courseId)}>Continuar</button>
            </li>
          ))}
        </CourseBox>
        <CourseBox title="En Progreso">
          {progressData.map((item) => (
            <li key={item.studentCourseGradeKey.courseId}>
              {item.course.name}
              <button onClick={() => handleClickCourse(item.course.courseId)}>Continuar con el curso</button>
            </li>
          ))}
        </CourseBox>
        <CourseBox title="Cursos Completados">
          {completedCourses.map((course) => (
            <li key={course.studentCourseGradeKey.courseId}>
              <span> {course.course.name} Calificación: {course.grade}</span>
              <button onClick={() => getCertificate(course)}>Ver Certificado</button>
            </li>
          ))}
        </CourseBox>
      </div>
      <div className="progress-section">
        <h2>Barra de Progreso</h2>
        {progressData.map((course) => (
          <div key={course.studentCourseGradeKey.courseId} className="progress-item">
            <span>{course.course.name}</span>
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
