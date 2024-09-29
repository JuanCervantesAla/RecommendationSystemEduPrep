import { useState } from "react"; 
import './LoginPage.css';

export const LoginPage = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    // Aquí puedes manejar el inicio de sesión, como hacer una llamada a la API
    console.log('Usuario:', user);
    console.log('Contraseña:', password);
  };

  return (
    <div className="container">
        <div className="wrapper">
            <form onSubmit={handleSubmit} name="formulario" method="post">
                <h1>Iniciar Sesión</h1>
                <div className="input-box">
                <input 
                    type="text" 
                    name="user" 
                    placeholder="Nombre de usuario" 
                    onChange={e => setUser(e.target.value)} 
                    required // Agregar validación
                />
                </div>
                <div className="input-box">
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    onChange={e => setPassword(e.target.value)} 
                    required // Agregar validación
                />
                </div>
                <div>
                <button type="submit">Iniciar sesión</button>
                <button type="reset">Borrar</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginPage;
