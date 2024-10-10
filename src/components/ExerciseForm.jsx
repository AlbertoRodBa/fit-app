import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('Lunes'); // Valor por defecto

  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type) return; // No permitir agregar ejercicios vacíos
    onAddExercise({ name, type, day }); // Añadir el día a los ejercicios
    setName('');
    setType('');
    setDay('Lunes'); // Resetear al día por defecto
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Nombre del ejercicio" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Tipo de ejercicio" 
        value={type} 
        onChange={(e) => setType(e.target.value)} 
        required 
      />
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <button type="submit">Agregar Ejercicio</button>
    </form>
  );
};

export default ExerciseForm;
