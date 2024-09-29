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
                        <a href='/courses'>Ver los cursos</a>
                    </li>
                    <li>
                        <a href='/people'>Testimonios</a>
                    </li>
                    <li>
                        <a href='/we'>Contactanos</a>
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