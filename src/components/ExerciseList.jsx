import React from 'react';
import ExerciseItem from './ExerciseItem';

const ExerciseList = ({ exercises, onDelete }) => {
  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <ExerciseItem 
          key={exercise.id} 
          exercise={exercise} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default ExerciseList;
