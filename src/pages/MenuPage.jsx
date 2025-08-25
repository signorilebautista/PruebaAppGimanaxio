import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MenuPage.css';

const MenuPage = () => {
  const navigate = useNavigate();

  const menuOptions = [
    {
      id: 'reserva',
      title: 'RESERVAR CLASE',
      icon: '📅',
      description: 'Reserva tu clase favorita'
    },
    {
      id: 'horarios',
      title: 'HORARIOS',
      icon: '🕒',
      description: 'Consulta los horarios disponibles'
    },
    {
      id: 'perfil',
      title: 'MI PERFIL',
      icon: '👤',
      description: 'Gestiona tu información personal'
    },
    {
      id: 'historial',
      title: 'HISTORIAL',
      icon: '📊',
      description: 'Ve tu historial de entrenamientos'
    }
  ];

  const handleOptionClick = (optionId) => {
    switch (optionId) {
      case 'reserva':
        navigate('/reserva');
        break;
      case 'horarios':
        // Navegar a página de horarios
        break;
      case 'perfil':
        // Navegar a página de perfil
        break;
      case 'historial':
        // Navegar a página de historial
        break;
      default:
        break;
    }
  };

  return (
    <div className="menu-page">
      <div className="header">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-main">
              <div className="good-text">GOOD</div>
              <div className="life-center-text">LIFE CENTER</div>
            </div>
            <div className="logo-icon">
              <div className="kettlebell-g">
                <div className="g-letter">G</div>
                <div className="dumbbell-inside"></div>
              </div>
            </div>
          </div>
        </div>
        <h1>MENÚ PRINCIPAL</h1>
      </div>

      <div className="menu-grid">
        {menuOptions.map((option) => (
          <div
            key={option.id}
            className="menu-option"
            onClick={() => handleOptionClick(option.id)}
          >
            <div className="option-icon">{option.icon}</div>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </div>
        ))}
      </div>

      <button 
        className="logout-button"
        onClick={() => navigate('/')}
      >
        CERRAR SESIÓN
      </button>
    </div>
  );
};

export default MenuPage;
