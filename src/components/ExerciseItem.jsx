import React, { useState } from 'react';

const ExerciseItem = ({ exercise, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <li className={`exercise-item ${completed ? 'completed' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={handleToggle} 
        className="checkbox-container" 
        style={{ marginRight: '10px' }} 
      />
      {/* El tachado se aplicará solo a este span */}
      <span style={{ flexGrow: 1 }}>
        {exercise.name} - {exercise.type}
      </span>
      {/* El botón "Eliminar" no hereda el tachado */}
      <button 
        className="delete-button"
        onClick={() => onDelete(exercise.id)}
        style={{ marginLeft: '10px' }}
      >
        Eliminar
      </button>
    </li>
  );
};

export default ExerciseItem;
