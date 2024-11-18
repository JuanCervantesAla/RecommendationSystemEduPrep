import { useLocation } from 'react-router-dom';
import React, { useState } from "react";
import './Dashboard.css';
import NavBarLogged from './NavBarLogged';
import logo_light from  '../../EduPrepReact/src/assets/logo.png'
import search_icon from  '../../EduPrepReact/src/assets/search-b.png'

export const Dashboard = () => {
    const location = useLocation();
    const user = location.state?.user;
    return(
        <div className='dashboard-container'>
            <NavBarLogged />
        </div>
    );
};

export default Dashboard;