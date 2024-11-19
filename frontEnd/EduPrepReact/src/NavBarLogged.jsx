import React from 'react'
import './NavBarLogged.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const NavBarLogged = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const location = useLocation();

  const navigate = useNavigate();

  const handleClickProgress = () => {
      navigate('/studentprogress');
  };

  const handleClickCourses = () => {
    navigate('/allCourse');
  };

  const logoutSession = () => {
    logout();
    navigate('/');
  }

  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <a href='/' className='logo'>
                EduPrep
            </a>
        </div>
        <div className='navbar-center'>
            <ul className='nav-links'>
                <li>
                    <a onClick={handleClickProgress}>Mi progreso</a>
                </li>
                <li>
                    <a onClick={handleClickCourses}>Cursos</a>
                </li>
            </ul>
        </div>
        <div className='navbar-right'>
            <span>Usuario activo: {user.firstname} {user.lastname} <button onClick={logoutSession}>Cerrar Sesion</button></span>
        </div>
    </nav>
  );
};

export default NavBarLogged
