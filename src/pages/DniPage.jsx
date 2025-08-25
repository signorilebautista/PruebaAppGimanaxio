import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DniPage.css';

const DniPage = () => {
  const [dni, setDni] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dni.trim()) {
      // Aquí puedes agregar la lógica de validación del DNI
      navigate('/menu');
    }
  };

  return (
    <div className="dni-page">
      <div className="led-light"></div>
      <div className="header-section">
                 <div className="logo-container">
           <div className="logo">
             <img 
               src="/logo-goodlife.png.png" 
               alt="GoodLife Center Logo" 
               className="logo-image"
             />
           </div>
         </div>
        
        <div className="welcome-text">
          <h1>¡HOLA DE NUEVO!</h1>
          <div className="instruction-box">
            <p>INGRESA TU DNI PARA EMPEZAR A ENTRENAR</p>
          </div>
        </div>
      </div>



      <div className="form-section">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="DNI"
              className="dni-input"
              maxLength="8"
            />
          </div>
          
          <button type="submit" className="login-button">
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default DniPage;
