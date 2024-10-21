import React, { useState } from "react";
import './Registro.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    lastname: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => { //Handle to fill the blank
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/api/user/register', {
            firstname: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            password: formData.password,
        });

        if(response.status === 201){
          const { message, data } = response.data;
          console.log(data);
          navigate('/dashBoard', {state: {user:data}});
        }

    } catch (error) {
        console.error("Error al registrar:", error.response?.data || error.message);
    }
};

  return (
    <div className="registro-body"> {}
      <section className="registro-section">
        <h2 className="registro-title">Registro</h2>
        <form onSubmit={handleSubmit} className="registro-form">
          <div className="form-group">
            <label className="registro-label"> {}
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="registro-input" 
              />
            </label>
          </div>
          <div className="form-group">
            <label className="registro-label">
              Apellido:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="registro-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="registro-label">
              Contraseña:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="registro-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="registro-label">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="registro-input"
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="registro-button">Registrar</button> {}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
