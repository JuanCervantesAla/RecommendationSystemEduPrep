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
        const lessonsData = Array.isArray(response.data) ? response.data : [];
        const transformedLessons = lessonsData.map((lesson) => ({
          title: lesson.title || 'Título desconocido',
          content: lesson.content || 'Contenido no disponible',
        }));
        setLessons(transformedLessons);
        const response2 = await axios.get(`http://localhost:8080/api/studentcoursegrade/getRecord/${user.studentId}/${course.courseId}`);
        setProgressPercentage(response2.data.progress);
        console.log(response2.data.progress);
        

      } catch (error) {
        console.error("Error al obtener las lecciones o el porcentaje:", error);
      }

    };

    const getExamData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/course/${course.courseId}/exam`);
        const examData = response.data || [];
        setExamData(examData);
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

  //  const progressPercentage = ((completedTasks / Object.keys(sections).length) * 100).toFixed(0);

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
  
      // Actualiza el estado con el progreso calculado.
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
        <img src={"./src/assets/introduccionalapsicologia.png"} width="90" height="90" />
        <h1>{course.name}</h1>
      </header>
      <main className="course-content">
        <aside className="psisidebar">
          {Object.entries(sections).map(([section, subSections]) => (
            <div key={section} className="psisection">
              <h2 onClick={() => toggleSection(section)}>{section}</h2>
              {activeSection === section && Array.isArray(subSections) && (
                <ul>
                  {subSections.map((subSection) => (
                    <li key={subSection.title} onClick={() => toggleSubSection(subSection.title)}>
                      {subSection.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
        <section className="psicontent">
          <div>
            <h2>Progreso: {progressPercentage}%</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(completedTasks / Object.keys(sections).length) * 100}%` }}></div>
            </div>
          </div>

          {activeSection === 'Actividad' && (
            <div>
              <h3>Ver video de apoyo</h3>
              <iframe 
                width="800" 
                height="500" 
                src={course.videoUrl} 
                title="Video de apoyo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
              <button className="btnCourse" onClick={() => completeTask('Actividad', 'Ver video de apoyo')} disabled={completedButtons.has('Actividad-Ver video de apoyo')}>
                Marcar tarea completa
              </button>
            </div>
          )}

          {activeSection === 'Examen' && (
            <div className="exam-container">
              <h2>{examData.title}</h2>
              <div className="questions-container">
                {examData.questions.map((question, index) => (
                  <div key={question.questionId} className="question-item">
                    <p className="question-text">{index + 1}. {question.question}</p>
                    <div className="options-container">
                      {question.options.map((option) => (
                        <label key={option} className="option-label">
                          <input
                            type="radio"
                            name={`question-${question.questionId}`}
                            value={option}
                            onChange={() => handleExamAnswer(question.questionId, option)}
                            disabled={examSubmitted}
                            className="option-input"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="exam-actions">
                {!examSubmitted ? (
                  <button className='btnCourse' onClick={submitExam}>Enviar respuestas</button>
                ) : (
                  <div>
                    <p className="results">Respuestas correctas: {correctCount}/{examData.questions.length}</p>
                    <button className='btnCourse' onClick={resetExam}>Reintentar examen</button>
                  </div>
                )}
                {renderCompletionButton()}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
