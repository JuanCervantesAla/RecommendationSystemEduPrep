import { useState } from "react"; 
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:8080/api/user/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        
        localStorage.setItem('user', JSON.stringify(data));
        const { message, data } = response.data;
        
        
        login(data); 

        
        navigate('/studentProgress', { state: { user: data } });
      }

    } catch (error) {
      console.error("Error en el inicio de sesión: ", error.response?.data || error.message);
    }
  };

  return (
    <div className="container2">
        <div className="wrapper">
            <form onSubmit={handleSubmit} name="formulario" method="post">
                <h1>Iniciar Sesión</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Contraseña" 
                        onChange={e => setPassword(e.target.value)} 
                        required
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