import React from 'react';
import ExerciseList from './ExerciseList';

const WeeklyPlan = ({ exercises, onDelete }) => {
  return (
    <div>
      <h2>Plan Semanal</h2>
      <ExerciseList exercises={exercises} onDelete={onDelete} />
    </div>
  );
};

export default WeeklyPlan;
