import React, { useEffect, useState } from "react";
import './allCourse.css';
import axios from 'axios';
import NavBar from "./NavBar";
import Card from "./CardCourse";

export const allCourse = () => {
    const [quantityCourse, setQuantityCourse] = useState(null);
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [tempCourses, setTempCourses] = useState([]);
    const [valueInput, setValueInput] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/course/quantity')
            .then(response => {
                setQuantityCourse(response.data);
            })
            .catch(error => {
                console.error('No se pudo obtener la cantidad de cursos: ', error);
            });
    }, []);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/course');
                const coursesData = Array.isArray(response.data) ? response.data : [];
                setCourses(coursesData);
                setAllCourses(coursesData);
            } catch (error) {
                console.error("Error al obtener los cursos:", error);
            }
        };
        getCourses();
    }, []);

    const clearCourses = () => {
        setTempCourses(courses);
        setCourses([]);
    };

    const allCoursesButton = () => {
        setCourses(allCourses);
    };

    const searchCourse = async () => {
        setTempCourses(courses); 
        setCourses([]); 

        try {
          const response = await axios.get(`http://localhost:8080/api/course/name/${valueInput}`);
          setCourses(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
          console.error("Error al buscar los cursos:", error);
          setCourses([]);
      }
    };

    const searchByCategory = async (category) => {
        setTempCourses(courses); 
        setCourses([]); 
        try {
            const response = await axios.get(`http://localhost:8080/api/course/category/${category}`);
            setCourses(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error al obtener los cursos:", error);
            setCourses([]);
        }
    };

    const handleInputChange = (event) => {
        setValueInput(event.target.value);
    };

    useEffect(() => {
        console.log("Longitud de cursos:", courses.length);
    }, [courses]);

    return (
        <div className="allCourseContainer">
            <NavBar />
            <div className="allCourseWrapper">
                <div id="allCourseSearchContainer">
                    <input 
                        type="search" 
                        id="searchInput" 
                        placeholder="Busca un curso" 
                        value={valueInput} 
                        onChange={handleInputChange}
                    />
                    <button id="search" onClick={searchCourse}>Buscar</button>
                </div>
                <div id="allCourseButtons">
                    <button className="buttonValue" onClick={allCoursesButton}>All</button>
                    <button className="buttonValue" onClick={() => searchByCategory("Informatica")}>Informatica</button>
                    <button className="buttonValue" onClick={() => searchByCategory("Matematicas")}>Matematicas</button>
                    <button className="buttonValue" onClick={() => searchByCategory("Ciencias")}>Ciencias</button>
                    <button className="buttonValue" onClick={() => searchByCategory("Medicina")}>Medicina</button>
                    <button className="buttonValue" onClick={clearCourses}>Limpiar busqueda</button>
                </div>
            </div>
            <div className="allCourseCard">
                <ul>
                    {courses.length > 0 ? (
                        courses.map((course) => (
                            <Card
                                key={course.courseId}
                                title={course.name}
                                description={course.textintroduction}
                                category={course.category}
                            />
                        ))
                    ) : (
                        <li>No se encontraron cursos.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default allCourse;
