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
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col md:flex-row md:items-center md:space-x-4">
      <input 
        type="text" 
        placeholder="Nombre del ejercicio" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        className="border border-gray-300 rounded px-4 py-2 flex-grow mb-2 md:mb-0"
      />
      <input 
        type="text" 
        placeholder="Tipo de ejercicio" 
        value={type} 
        onChange={(e) => setType(e.target.value)} 
        required 
        className="border border-gray-300 rounded px-4 py-2 flex-grow mb-2 md:mb-0"
      />
      <select 
        value={day} 
        onChange={(e) => setDay(e.target.value)} 
        className="border border-gray-300 rounded px-4 py-2 mb-2 md:mb-0"
      >
        {daysOfWeek.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <button 
        type="submit" 
        className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 transition duration-200 w-full md:w-auto"
      >
        Agregar Ejercicio
      </button>
    </form>
  );
};

export default ExerciseForm;
