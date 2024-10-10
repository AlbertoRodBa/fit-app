// src/components/WeeklyPlan.jsx
import React from 'react';
import { exercises } from '../data/exercises';

const WeeklyPlan = () => {
  return (
    <div>
      <h2>Plan Semanal</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name} - {exercise.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyPlan;
