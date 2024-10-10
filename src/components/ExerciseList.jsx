import React from 'react';
import ExerciseItem from './ExerciseItem';

const ExerciseList = ({ exercises, onDelete }) => {
  return (
    <div className="exercise-list">
      {exercises.length > 0 ? (
        exercises.map((exercise) => (
          <ExerciseItem 
            key={exercise.id} 
            exercise={exercise} 
            onDelete={onDelete} 
          />
        ))
      ) : (
        <p>No hay ejercicios disponibles.</p> // Mensaje si no hay ejercicios
      )}
    </div>
  );
};

export default ExerciseList;
