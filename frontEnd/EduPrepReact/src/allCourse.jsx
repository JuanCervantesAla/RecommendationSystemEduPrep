import React, { useEffect, useState } from "react";
import './allCourse.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import Card from "./CardCourse";

export const allCourse = () => {
    const [quantityCourse, setQuantityCourse] = useState(null);//Number of Courses
    const [courses, setCourses] = useState([]);//all courses

    useEffect(() => {
        axios.get('http://localhost:8080/api/course/quantity')
            .then(response => {
                setQuantityCourse(response.data);
            })
            .catch(error => {
                console.error('Couldnt get the total of courses: ', error);
            });
    }, []);

    useEffect(() => {
        const getCourses = async () => {
            try {
              const response = await axios.get('http://localhost:8080/api/course');
              setCourses(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
              console.error("Error obtaining:", error);
            }
          };
      
          getCourses();
    }, []);


  return (
    <div className="allCourseContainer">
        <NavBar />
        <p>There are {quantityCourse} courses</p>
        <div className="allCourseCard">
            <ul>
                {courses.length > 0 ? (
                courses.map((course, index) => (
                    <Card
                    key={course.courseId}
                    title={course.name}
                    description={course.textintroduction}
                    category={course.category}
                    />
                ))
                ) : (
                <li>No courses found.</li>
                )}
            </ul>
        </div>
    </div>
  );
};

export default allCourse;
