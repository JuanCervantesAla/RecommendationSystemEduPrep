import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import './course.css';
import NavBar from './NavBar';
import NavBarLogged from "./NavBarLogged";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Introduccion() {
  const location = useLocation();
  const { course } = location.state || {};
  const { user, isAuthenticated, logout } = useAuth();
  const [lessons, setLessons] = useState([]);
  const [examData, setExamData] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null); // Para almacenar la lección activa
  const [examAnswers, setExamAnswers] = useState({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [completedButtons, setCompletedButtons] = useState(new Set());
  const [progressPercentage, setProgressPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getLessons = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/course/${course.courseId}/lessons`);
        console.log(response.data);
        const lessonsData = Array.isArray(response.data) ? response.data : [];
        const transformedLessons = lessonsData.map((lesson) => ({
          title: lesson.title || 'Título desconocido',
          content: lesson.content || 'Contenido no disponible',
        }));
        setLessons(transformedLessons);
        const response2 = await axios.get(`http://localhost:8080/api/studentcoursegrade/getRecord/${user.studentId}/${course.courseId}`);
        setProgressPercentage(response2.data.progress);
      } catch (error) {
        console.error("Error al obtener las lecciones o el porcentaje:", error);
      }
    };

    const getExamData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/course/${course.courseId}/exam`);
        const examData = response.data || [];
        setExamData(examData);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener el examen:", error);
      }
    };

    getLessons();
    getExamData();
  }, [course.courseId]);

  const toggleSection = (section) => {
    if (section === 'Actividad') {
      setActiveSection('Actividad');
    } else {
      setActiveSection(activeSection === section ? null : section);
    }
    setActiveSubSection(null);
    resetExam();
  };

  const toggleSubSection = (subSection) => {
    setActiveSubSection(activeSubSection === subSection ? null : subSection);
    resetExam();
  };

  const handleExamAnswer = (questionId, answer) => {
    setExamAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const submitExam = () => {
    const results = {};
    let count = 0;
    examData?.questions.forEach((question) => {
      const isCorrect = examAnswers[question.questionId] === question.correctAnswer;
      results[question.questionId] = isCorrect;
      if (isCorrect) count += 1;
    });

    setCorrectCount(count);
    setExamSubmitted(true);
  };

  const resetExam = () => {
    setExamSubmitted(false);
    setExamAnswers({});
    setCorrectCount(0);
  };

  const renderCompletionButton = () => {
    if (activeSection === 'Examen' && examSubmitted && correctCount === examData?.questions.length) {
      return <button className='btnCourse' onClick={() => completeTask('Examen', 'Examen final')} disabled={completedButtons.has('Examen-Examen final')}>Tarea completada</button>;
    } else if (activeSection !== 'Examen') {
      return <button className='btnCourse' onClick={() => completeTask(activeSection, activeSubSection)} disabled={completedButtons.has(`${activeSection}-${activeSubSection}`)}>Tarea completada</button>;
    }
    return null;
  };

  const sections = {
    Lectura: lessons,
    Actividad: [
      { title: 'Ver video de apoyo', content: <iframe width="800" height="500" src={course.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> },
    ],
    Examen: examData,
  };

  const completeTask = async (section, title) => {
    const taskIdentifier = `${section}-${title}`;
    if (!completedButtons.has(taskIdentifier)) {
      setCompletedTasks((prev) => prev + 1);
      setCompletedButtons((prev) => new Set(prev).add(taskIdentifier));
    }
  
    try {
      const updatedProgressPercentage = ((completedTasks + 1) / Object.keys(sections).length) * 100;
      console.log("Progreso calculado:", updatedProgressPercentage);
  
      const response = await axios.put(
        `http://localhost:8080/api/studentcoursegrade/updateProgress/${user.studentId}/${course.courseId}/${updatedProgressPercentage.toFixed(0)}`
      );
  
      console.log("Actualizado con éxito:", response.data);
  
      setProgressPercentage(updatedProgressPercentage.toFixed(0));
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  return (
    <div className="psicontainer">
      {isAuthenticated ? (
        <NavBarLogged />
      ) : (
        <NavBar />
      )}
      <header>
        <h1>{course.name}</h1>
        <div>
          <h4>Progreso: {progressPercentage}%</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(completedTasks / Object.keys(sections).length) * 100}%` }}></div>
          </div>
        </div>
      </header>
      <main className="course-content">
        <aside className="psisidebar">
          {Object.entries(sections).map(([section, subSections]) => (
            <div key={section} className={`psisection ${activeSection === section ? 'active' : ''}`}>
              <h2 onClick={() => toggleSection(section)}>{section}</h2>
              <div 
                className="accordion-content" 
                style={{
                  height: activeSection === section && Array.isArray(subSections) ? `${subSections.length * 40}px` : '0px',
                  transition: 'height 0.5s ease'
                }}
              >
                {activeSection === section && Array.isArray(subSections) && (
                  <h3 className="black-text" onClick={() => toggleSubSection(subSection.title)}>Ver contenido</h3>
                )}
              </div>
            </div>
          ))}
        </aside>
        <section className="psicontent">
          {activeSection === 'Lectura' && (
            <div>
              <h2>Lecciones</h2>
              <div className="lesson-buttons">
                {lessons.map((lesson, index) => (
                  <button
                    key={index}
                    className={`lesson-button ${activeLesson === index ? 'active' : ''}`}
                    onClick={() => setActiveLesson(index)}
                  >
                    {lesson.title}
                  </button>
                ))}
              </div>
              {activeLesson !== null && (
                <div className="lesson-content">
                  <h3>{lessons[activeLesson].title}</h3>
                  <p>{lessons[activeLesson].content}</p>
                </div>
              )}
            </div>
          )}
          
          {activeSection === 'Actividad' && (
            <div>
              <h2>Ver video de apoyo</h2>
              <iframe 
                width="800" 
                height="500" 
                src={course.videoUrl} 
                title="Video de apoyo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
              <button className="btnCourse" onClick={() => completeTask('Actividad', 'Ver video de apoyo')} disabled={completedButtons.has('Actividad-Ver video de apoyo')}>Tarea completada</button>
            </div>
          )}
          
          {activeSection === 'Examen' && (
            <div>
              <h2>Examen</h2>
              {examData?.questions.map((question, index) => (
                <div key={index} className="question-item">
                  <p>{question.question}</p>
                  <div className="answers">
                    {question.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleExamAnswer(question.questionId, option)}
                        className={`answer-button ${examAnswers[question.questionId] === option ? 'selected' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button className="btnCourse" onClick={submitExam} disabled={examSubmitted}>
                Enviar examen
              </button>
              {examSubmitted && (
                <div>
                  <p>Resultado: {correctCount} de {examData.questions.length} respuestas correctas</p>
                  {renderCompletionButton()}
                </div>
              )}
            </div>
          )}
        </section>
      </main>
      <ToastContainer />
    </div>
  );
}
