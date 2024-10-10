import React, { useState } from 'react';

const ExerciseItem = ({ exercise, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <div className="exercise-item" style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={handleToggle} 
        style={{ marginRight: '10px' }} 
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {exercise.name} - {exercise.type}
      </span>
      <button onClick={() => onDelete(exercise.id)} style={{ marginLeft: 'auto' }}>
        Eliminar
      </button>
    </div>
  );
};

export default ExerciseItem;
