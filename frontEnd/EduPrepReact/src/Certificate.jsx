import React from 'react';
import './Certificate.css';

const Certificate = ({ studentName, courseName, completionDate }) => {
    const currentDate = new Date();
    const formattedDate = completionDate || 
        `${currentDate.getDate()} de ${currentDate.toLocaleString('es-ES', { month: 'long' })} de ${currentDate.getFullYear()}`;

    return (
        <div className="certificate-container">
            <div className="certificate-border">
                <h1 className="certificate-title">Certificado de Finalización EDUPREP</h1>
                <p className="certificate-text">
                    Este certificado se otorga a:
                </p>
                <h2 className="certificate-student">{studentName}</h2>
                <p className="certificate-text">
                    Por haber completado satisfactoriamente el curso:
                </p>
                <h3 className="certificate-course">{courseName}</h3>
                <p className="certificate-text">
                    Fecha de finalización:
                </p>
                <h4 className="certificate-date">{formattedDate}</h4>
                <div className="certificate-signature">
                    <p>_______________________</p>
                    <p>Firma del Instructor</p>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
