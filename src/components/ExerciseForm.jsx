import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Hombros'); // Tipo por defecto

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return; // No permitir agregar ejercicios sin nombre
    onAddExercise({ name, type, completed: false });
    setName(''); // Limpiar el nombre del ejercicio después de agregarlo
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
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Hombros">Hombros</option>
        <option value="Espalda">Espalda</option>
        <option value="Abdominales">Abdominales</option>
        <option value="Piernas">Piernas</option>
        <option value="Antebrazos">Antebrazos</option>
        <option value="Cardio">Cardio</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
      <button type="submit">Agregar Ejercicio</button>
    </form>
  );
};

export default ExerciseForm;
