import React, { useState } from 'react';

const ExerciseForm = ({ onAddExercise, onResetExercises }) => {
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
    <div className="mb-4 pt-10"> {/* Agrega un padding superior al contenedor */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input 
          type="text" 
          placeholder="Nombre del ejercicio" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="border border-gray-300 bg-white text-gray-800 rounded px-4 py-2 flex-grow mb-2 md:mb-0"
        />
        <input 
          type="text" 
          placeholder="Zona muscular" 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required 
          className="border border-gray-300 bg-white text-gray-800 rounded px-4 py-2 flex-grow mb-2 md:mb-0"
        />
        <select 
          value={day} 
          onChange={(e) => setDay(e.target.value)} 
          className="border border-gray-300 bg-white text-gray-800 rounded px-4 py-2 mb-2 md:mb-0"
        >
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <button 
          type="submit" 
          className="bg-[#733BFF] text-white rounded px-4 py-2 hover:bg-[#592BCC] transition duration-200 w-full md:w-auto"
        >
          Agregar Ejercicio
        </button>
      </form>
      {/* Asegúrate de que el botón Restablecer esté alineado con el botón Agregar Ejercicio */}
      <div className="mt-4 flex justify-center"> {/* Flex para centrar el botón */}
        <button 
          onClick={onResetExercises} // Llama a la función de restablecer
          className="bg-[#733BFF] text-white rounded px-4 py-2 transition duration-200 w-auto hover:bg-[#592BCC]"
        >
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default ExerciseForm;
