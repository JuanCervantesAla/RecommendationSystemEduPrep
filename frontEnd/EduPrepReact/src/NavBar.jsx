import React from 'react';
import './NavBar.css';

const NavBar = () =>{

    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <a href='/' className='logo'>
                    EduPrep
                </a>
            </div>
            <div className='navbar-center'>
                <ul className='nav-links'>
                    <li>
                        <a href='/login'>Ver los cursos</a>
                    </li>
                    <li>
                        <a href='/register'>Testimonios</a>
                    </li>
                    <li>
                        <a href='/cursos'>Contactanos</a>
                    </li>
                </ul>
            </div>
            <div className='navbar-right'>
                <a href='/register'>Registrarse</a>
                <button>Iniciar Sesion</button>
            </div>
        </nav>
    );
};

export default NavBar;