import React from 'react';

const ExerciseItem = ({ exercise, onDelete, onToggleComplete }) => {
  return (
    <li className={`exercise-item ${exercise.completed ? 'completed' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="checkbox" 
        checked={exercise.completed} 
        onChange={() => onToggleComplete(exercise.id)} 
        className="checkbox-container" 
        style={{ marginRight: '10px' }} 
      />
      <span className="exercise-text" style={{ flexGrow: 1 }}>
        {exercise.name} - {exercise.type}
      </span>
      <button 
        className="delete-button"
        onClick={(e) => { 
          e.stopPropagation(); 
          onDelete(exercise.id);
        }}
        style={{ marginLeft: '10px' }}
      >
        Eliminar
      </button>
    </li>
  );
};

export default ExerciseItem;
