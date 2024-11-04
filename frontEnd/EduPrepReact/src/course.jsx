import React, { useState } from 'react';
import './course.css';
import NavBar from './NavBarLogged'

export default function Introduccion() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [examAnswers, setExamAnswers] = useState({});
  const [examResults, setExamResults] = useState({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0); // Nuevo estado para contar tareas completadas
  const [completedButtons, setCompletedButtons] = useState(new Set()); // Nuevo estado para rastrear botones completados


  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
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

    sections.Examen[0].content.forEach((question) => {
      const isCorrect = examAnswers[question.id] === question.correctAnswer;
      results[question.id] = isCorrect;
      if (isCorrect) count += 1;
    });

    setExamResults(results);
    setCorrectCount(count);
    setExamSubmitted(true);
  };

  const resetExam = () => {
    setExamSubmitted(false);
    setExamResults({});
    setCorrectCount(0);
  };

  const completeTask = (section, title) => {
    const taskIdentifier = `${section}-${title}`;
    if (!completedButtons.has(taskIdentifier)) {
      setCompletedTasks((prev) => {
        const newCount = prev + 1;
        return Math.min(newCount, totalTasks); // Aumentar el contador de tareas completadas, no más que totalTasks
      });
      setCompletedButtons((prev) => new Set(prev).add(taskIdentifier)); // Agregar la tarea completada al conjunto
    }
  };

  const renderCompletionButton = () => {
    if (activeSection === 'Examen' && examSubmitted && correctCount === sections.Examen[0].content.length) {
      return <button className='btnCourse'  onClick={() => completeTask('Examen', 'Examen final')} disabled={completedButtons.has('Examen-Examen final')}>Tarea completada</button>;
    } else if (activeSection !== 'Examen') {
      return <button className='btnCourse' onClick={() => completeTask(activeSection, activeSubSection)} disabled={completedButtons.has(`${activeSection}-${activeSubSection}`)}>Tarea completada</button>;
    }
    return null;
  };
  


  const sections = {
    Lectura: [
      { title: 'Origen de la psicología', content: `La psicología como ciencia independiente es relativamente nueva, ya que en sus comienzos se encontraba ligada a la filosofía. En ese sentido, la práctica de la psicología se remonta a la Antigüedad. En los siglos IV y V a. C., pensadores como Platón y Aristóteles postularon distintas teorías sobre la naturaleza del ser humano, el alma y su relación con el cuerpo. 
        
        Más adelante, en la modernidad, surgieron doctrinas filosóficas como el racionalismo, que se centró en el estudio de la mente y la conciencia humana. René Descartes (1596-1650), uno de sus principales exponentes, concluyó que la única forma de acceder al conocimiento es la introspección.
        
        Otra corriente relevante de esta época fue el empirismo, que defendía la idea de que el conocimiento se adquiere a través de la experiencia sensorial. John Locke (1632-1704) consideró que, al nacer, la mente es como una hoja en blanco sobre la que se imprimen las ideas.
        
        El estudio de la relación entre la mente y el cuerpo dio lugar al nacimiento de la psicofisiología, considerada precursora de la psicología. El ingreso de las ciencias formales al panorama del saber posibilitó el inicio de una psicología experimental.
        
        El primer laboratorio de psicología experimental fue fundado por Wilhelm Wundt (1832-1920) en la Universidad de Leipzig, Alemania, en 1879. A partir de entonces, surgieron diversas ramas de exploración teórica y práctica de la mente humana, inaugurando un área del saber muy vasta y diversa.
        
        En la historia de la psicología, se pueden diferenciar tres grandes etapas:
        -Psicología precientífica. En esta etapa, la psicología era una rama de la filosofía. Se incluyen aquí los desarrollos filosóficos de los pensadores de la Antigüedad clásica y de la modernidad.
        -Psicología científica. En esta etapa, la psicología se estableció como ciencia. Se comenzaron a medir aspectos mentales de forma cuantitativa y se buscó establecer una relación entre la mente y el cuerpo.
        -Desarrollo de diversas escuelas. En esta etapa, la psicología experimentó un gran avance y diversificación en sus enfoques y áreas de estudio. Su campo se fue conformando a nivel mundial en diferentes corrientes teóricas.` },
        
        { title: 'Psicología precientífica', content: `Durante la Antigüedad clásica, especialmente la grecorromana, surgieron muchos de los grandes pensadores de Occidente. La reflexión sobre la psicología estaba relacionada con las prácticas filosóficas.

          Filósofos como Sócrates y Platón, en el siglo V y IV a. C., se hicieron importantes preguntas respecto a qué es ser humano. Llegaron a la conclusión de que debía existir un alma, inmortal y portadora del conocimiento, diferenciada del cuerpo, considerado material e imperfecto. Para Platón, el cuerpo era una cárcel para el alma, y el conocimiento podía alcanzarse mediante la introspección y la razón.

          Aristóteles, discípulo de Platón (384-322 a. C.) reformuló esta perspectiva y propuso que el conocimiento provenía de la experiencia sensorial y de la observación de la naturaleza. Así, concluyó que todas las cosas tienen una razón para existir (teología).

          Más adelante, los neoplatónicos facilitaron la integración de la filosofía con el cristianismo, que fue desarrollado por San Agustín (354-430). La fe en Dios era considerada la actividad principal del alma.
          
          La modernidad marcó una revolución al reemplazar una visión espiritual por una perspectiva matemática y mecánica. Los métodos científicos se aplicaban a múltiples áreas, incluso a la psicología. Se consideraba que las personas podrían mejorar su destino a través de la razón y la experimentación.

          René Descartes (1596-1650) introdujo la idea de que la mente y el cuerpo son entidades separadas pero interactivas, y propuso un método de investigación basado en la duda. Defendió el racionalismo, considerando que el intelecto es innato.

          Por otro lado, John Locke (1632-1704) postuló que la mente humana es una tábula rasa, una hoja en blanco con la que se nace y en la que se van grabando las experiencias y las ideas. Defendió el empirismo, considerando que el conocimiento proviene de la experiencia.

          Tanto el racionalismo como el empirismo permanecieron presentes en la historia científica de la psicología, dando lugar a diferentes métodos y escuelas, como la psicología del aprendizaje y la psicología cognitiva.

          Otros precursores de importancia en la materia fueron el croata Marko Marulic (1450-1524), y los alemanes Rodolfo Goclenio (1547-1628) y Christian Wolff (1679-1754). También son importantes las formas previas de la psiquiatría, que desde mediados del siglo XVIII y hasta el XIX se practicaron bajo el nombre de “alienismo”.` },

        { title: 'Psicología científica', content: `La psicología científica nació en el siglo XIX, de la mano del incremento en los saberes médicos y biológicos,sobre todo neurológicos y psicofisiológicos. Los estudios de científicos como Gustav Fechner (1801-1887), Paul Pierre Broca (1824-1880) y Carl Wernicke (1848-1905) fueron clave en este sentido.

          También fue importante la revolución causada por las teorías evolucionistas de Charles Darwin (1809-1882), cuyas ideas sobre el origen de las especies fueron aplicadas a todas las áreas del conocimiento.

          En 1878, Wilhelm Wundt (1832-1920) fundó el primer laboratorio de psicología experimental en la Universidad alemana de Leipzig. Este evento es considerado el hito fundacional de la psicología moderna, es decir, su separación definitiva de la filosofía, emprendiendo un camino propiamente científico. Wundt planteó a la psicología como una nueva ciencia que debía investigar los contenidos mentales mediante la introspección y la experimentación.` },
          
        { title: 'Desarrollo de diversas escuelas', content: `Una vez que la psicología comenzó a desarrollarse como disciplina académica, surgieron sus dos primeras corrientes:

          -El estructuralismo: Defendido por Wilhelm Wundt. Se enfoca en las estructuras que dan forma a la mente, y en la relación entre sus elementos: sensaciones, percepciones y pensamientos.
          -El funcionalismo: Propuesto en Estados Unidos por William James (1842-1910). Se centra en cómo los procesos mentales ayudan a las personas a adaptarse a su entorno.
          
          Durante las primeras décadas de existencia de la psicología, se sumaron tres vertientes más:

          -El psicoanálisis: Desarrollado por Sigmund Freud (1856-1939). Se centra en el estudio del inconsciente y cómo influye en el comportamiento humano.
          -La psicología de la gestalt: Propuesta por Max Wertheimer (1880-1943) y Wolfgang Köhler (1887-1967), entre otros. Se enfoca en la percepción, y en cómo las personas organizan las experiencias sensoriales.
          -El conductismo: Su máximo representante fue el estadounidense John B. Watson (1878-1958). Se centra en el estudio del comportamiento observable.
          
          A partir de este escenario inicial, surgieron con el tiempo nuevas propuestas y consideraciones respecto a la mente humana y a cuáles tendrían que ser las aproximaciones ideales para un estudio riguroso y científico. Los adelantos en medicina, además, permitieron la modernización y formalización de la psiquiatría, y se abrió un nuevo horizonte de experimentación para el estudio de la conciencia.

          En la actualidad, la psicología continúa evolucionando y diversificándose en áreas de estudio y aplicaciones prácticas, como la psicología social, la psicología del deporte y la psicología organizacional.` },
    ],
    Actividad: [
      { title: 'Ver video de apoyo', content: <iframe width="800" height="500" src="https://www.youtube.com/embed/Tv4Fvir-Zmg?si=hdHLFbeAId6QLSMr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> },
      
    ],
    Examen: [
      {
        title: 'Examen final',
        content: [
          {
            id: 1,
            question: '¿En qué época la psicología comenzó a ser vista como una ciencia independiente?',
            options: ['Siglo IV a. C.', 'Edad Media', 'Siglo XIX', 'Siglo XVII'],
            correctAnswer: 'Siglo XIX',
          },
          {
            id: 2,
            question: '¿Qué filósofo postuló la teoría de que el conocimiento proviene de la experiencia sensorial?',
            options: ['Platón', 'Aristóteles', 'René Descartes', 'John Locke'],
            correctAnswer: 'John Locke',
          },
          {
            id: 3,
            question: '¿Quién fundó el primer laboratorio de psicología experimental en la Universidad de Leipzig?',
            options: ['Sigmund Freud', 'Wilhelm Wundt', 'Gustav Fechner', 'Carl Wernicke'],
            correctAnswer: 'Wilhelm Wundt',
          },
          {
            id: 4,
            question: '¿Cuál fue la principal aportación de Charles Darwin al campo de la psicología?',
            options: [
              'La teoría del psicoanálisis',
              'La teoría del conductismo',
              'La teoría de la evolución, que influyó en otras áreas del conocimiento',
              'La teoría de la percepción',
            ],
            correctAnswer: 'La teoría de la evolución, que influyó en otras áreas del conocimiento',
          },
          {
            id: 5,
            question: '¿Qué corriente psicológica fue desarrollada por Sigmund Freud y se centra en el estudio del inconsciente?',
            options: ['Estructuralismo', 'Funcionalismo', 'Conductismo', 'Psicoanálisis'],
            correctAnswer: 'Psicoanálisis',
          },
          {
            id: 6,
            question: '¿Quién es considerado el principal exponente del racionalismo y qué postulaba esta doctrina?',
            options: [
              'John Locke, que postulaba el empirismo',
              'Wilhelm Wundt, que postulaba el estructuralismo',
              'René Descartes, que consideraba que el intelecto es innato',
              'Aristóteles, que postulaba el teologismo',
            ],
            correctAnswer: 'René Descartes, que consideraba que el intelecto es innato',
          },
          {
            id: 7,
            question: '¿Cuál de las siguientes corrientes se enfoca en el comportamiento observable?',
            options: ['Funcionalismo', 'Conductismo', 'Gestalt', 'Psicoanálisis'],
            correctAnswer: 'Conductismo',
          },
          {
            id: 8,
            question: '¿Cuál de las siguientes áreas se desarrolló a partir del estructuralismo y el funcionalismo en la psicología?',
            options: [
              'Psicología cognitiva',
              'Psicología del aprendizaje',
              'Psicología social',
              'Psicología organizacional',
            ],
            correctAnswer: 'Psicología cognitiva',
          },
          {
            id: 9,
            question: '¿Cuál de las siguientes afirmaciones describe mejor el estructuralismo en psicología?',
            options: [
              'Se enfoca en los comportamientos observables',
              'Examina la relación entre mente y cuerpo',
              'Analiza las estructuras que componen la mente',
              'Se centra en cómo las personas se adaptan a su entorno',
            ],
            correctAnswer: 'Analiza las estructuras que componen la mente',
          },
          {
            id: 10,
            question: '¿Qué movimiento psicológico se centra en la percepción y en cómo las personas organizan las experiencias sensoriales?',
            options: ['Conductismo', 'Gestalt', 'Psicoanálisis', 'Estructuralismo'],
            correctAnswer: 'Gestalt',
          },
        ],
      },
    ],
  };
  const totalTasks = Object.values(sections).reduce((acc, subSections) => acc + subSections.length, 0);
  return (
    <div className="psicontainer">
      <NavBar />
      <header>
        <img src={"./src/assets/introduccionalapsicologia.png"} width="90" height="90" />
        <h1>Introducción a la psicología</h1>
      </header>
      <main className="course-content">
        <aside className="psisidebar">
          {Object.entries(sections).map(([section, subSections]) => (
            <div key={section} className="psisection">
              <h2 onClick={() => toggleSection(section)}>{section}</h2>
              {activeSection === section && (
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
            <h2>Progreso: {((completedTasks / totalTasks) * 100).toFixed(0)}%</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(completedTasks / totalTasks) * 100}%` }}></div>
            </div>
          </div>

          {activeSection && activeSubSection && (
            <div>
              <h2>{activeSubSection}</h2>
              {activeSection === 'Examen' && Array.isArray(sections[activeSection].find((s) => s.title === activeSubSection).content) ? (
                sections[activeSection].find((s) => s.title === activeSubSection).content.map((question) => (
                  <div key={question.id} className="question-container">
                    <br />
                    <p>{question.question}</p>
                    {question.options.map((option) => (
                      <label key={option}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          onChange={() => handleExamAnswer(question.id, option)}
                          disabled={examResults[question.id] === true}
                        />
                        {option}
                        {examSubmitted && (
                          examResults[question.id] === true && examAnswers[question.id] === option ? (
                            <span className="correct">✓</span>
                          ) : examSubmitted && examAnswers[question.id] === option ? (
                            <span className="incorrect">✕</span>
                          ) : null
                        )}
                        <br />
                      </label>
                    ))}
                  </div>
                ))
              ) : (
                <p>{sections[activeSection].find((s) => s.title === activeSubSection).content}</p>
              )}
              {activeSection === 'Examen' && !examSubmitted && (
                <button className='btnCourse' onClick={submitExam}>Enviar respuestas</button>
              )}
              {examSubmitted && (
                <div>
                  <p>Respuestas correctas: {correctCount}/{sections.Examen[0].content.length}</p>
                  <button className='btnCourse' onClick={resetExam}>Reintentar examen</button>
                </div>
              )}
              {renderCompletionButton()} {/* Botón de tarea completada */}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
