import React from 'react'
import './NavBarLogged.css'
import { useNavigate } from 'react-router-dom';

const NavBarLogged = () => {

  const navigate = useNavigate();

  const handleClickProgress = () => {
      navigate('/studentprogress');
  };

  const handleClickCourses = () => {
    navigate('/allCourse');
  };

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
            
        </div>
    </nav>
  );
};

export default NavBarLogged
