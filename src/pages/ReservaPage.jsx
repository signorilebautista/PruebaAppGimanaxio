import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ReservaPage.css';

const ReservaPage = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const classes = [
    {
      id: 1,
      name: 'SPINNING',
      instructor: 'María García',
      duration: '45 min',
      intensity: 'Alta',
      icon: '🚴‍♀️'
    },
    {
      id: 2,
      name: 'YOGA',
      instructor: 'Carlos López',
      duration: '60 min',
      intensity: 'Baja',
      icon: '🧘‍♀️'
    },
    {
      id: 3,
      name: 'FUNCIONAL',
      instructor: 'Ana Rodríguez',
      duration: '50 min',
      intensity: 'Media',
      icon: '💪'
    },
    {
      id: 4,
      name: 'ZUMBA',
      instructor: 'Luis Martínez',
      duration: '55 min',
      intensity: 'Media',
      icon: '💃'
    }
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleReserve = () => {
    if (selectedClass && selectedTime) {
      // Aquí puedes agregar la lógica para hacer la reserva
      alert(`¡Reserva confirmada! ${selectedClass.name} a las ${selectedTime}`);
      navigate('/menu');
    } else {
      alert('Por favor selecciona una clase y un horario');
    }
  };

  return (
    <div className="reserva-page">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/menu')}>
          ← VOLVER
        </button>
        <h1>RESERVAR CLASE</h1>
      </div>

      <div className="content">
        <div className="section">
          <h2>Selecciona una clase</h2>
          <div className="classes-grid">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className={`class-card ${selectedClass?.id === classItem.id ? 'selected' : ''}`}
                onClick={() => setSelectedClass(classItem)}
              >
                <div className="class-icon">{classItem.icon}</div>
                <h3>{classItem.name}</h3>
                <p className="instructor">{classItem.instructor}</p>
                <div className="class-details">
                  <span className="duration">{classItem.duration}</span>
                  <span className="intensity">{classItem.intensity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedClass && (
          <div className="section">
            <h2>Selecciona un horario</h2>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedClass && selectedTime && (
          <div className="reservation-summary">
            <h3>Resumen de tu reserva</h3>
            <div className="summary-content">
              <p><strong>Clase:</strong> {selectedClass.name}</p>
              <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
              <p><strong>Horario:</strong> {selectedTime}</p>
              <p><strong>Duración:</strong> {selectedClass.duration}</p>
            </div>
          </div>
        )}

        <button
          className="reserve-button"
          onClick={handleReserve}
          disabled={!selectedClass || !selectedTime}
        >
          CONFIRMAR RESERVA
        </button>
      </div>
    </div>
  );
};

export default ReservaPage;
