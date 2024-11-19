import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Certificate from './Certificate';
import { useAuth } from './AuthContext';

const CertificateView = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const location = useLocation();
    const course = location.state?.course;

    if (!course) {
        return <p>No se proporcionaron datos del curso.</p>;
    }
    const currentDate = new Date();
    const completionDate = `${currentDate.getDate()} de ${currentDate.toLocaleString('es-ES', { month: 'long' })} de ${currentDate.getFullYear()}`;

    return (
        <Certificate 
            studentName={user.firstname +" " + user.lastname} 
            courseName={course.course.name} 
            completionDate={completionDate} 
        />
    );
};

export default CertificateView;