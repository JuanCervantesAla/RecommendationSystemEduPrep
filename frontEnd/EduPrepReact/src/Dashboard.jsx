import { useLocation } from 'react-router-dom';
import React, { useState } from "react";
import './Dashboard.css';

export const Dashboard = () => {
    const location = useLocation();
    const user = location.state?.user;
    return(
        <div className='dashboard-container'>
            <p>Hi {user?.firstname}</p>
        </div>
    );
};

export default Dashboard;