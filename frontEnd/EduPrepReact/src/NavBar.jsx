import React from 'react';
import './NavBar.css';

const NavBar = () =>{

    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <a href='/' className='logo'>
                    Home
                </a>
            </div>
            <div className='navbar-center'>
                <ul className='nav-links'>
                    <li>
                        <a href='/login'>Iniciar sesion</a>
                    </li>
                    <li>
                        <a href='/register'>Registrarse</a>
                    </li>
                    <li>
                        <a href='/cursos'>Ver los cursos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;