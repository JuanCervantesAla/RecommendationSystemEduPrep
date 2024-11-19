import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CertificateView.css';
import Certificate from './Certificate';
import { useAuth } from './AuthContext';

const CertificateView = () => {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state?.course;

    if (!course) {
        return <p>No se proporcionaron datos del curso.</p>;
    }

    const currentDate = new Date();
    const completionDate = `${currentDate.getDate()} de ${currentDate.toLocaleString('es-ES', { month: 'long' })} de ${currentDate.getFullYear()}`;

    const goBackToProgress = () => {
        navigate('/studentprogress');
    };

    return (
        <div className='CertificateViewContainer'>
            <Certificate
                studentName={`${user.firstname} ${user.lastname}`}
                courseName={course.course.name}
                completionDate={completionDate}
            />
            <button onClick={goBackToProgress}>Volver a mi progreso</button>
        </div>
    );
};

export default CertificateView;
