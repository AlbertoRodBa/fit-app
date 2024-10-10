import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type) return; // No permitir agregar ejercicios vacíos
    onAddExercise({ name, type });
    setName('');
    setType('');
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
      <button type="submit">Agregar Ejercicio</button>
    </form>
  );
};

export default ExerciseForm;
