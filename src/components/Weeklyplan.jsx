import React from 'react';

const WeeklyPlan = ({ exercises, onToggleComplete, onRemoveExercise }) => {
  return (
    <div>
      <h2>Plan Semanal</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={exercise.completed}
              onChange={() => onToggleComplete(exercise.id)}
              style={{ marginRight: '10px' }}
            />
            <span
              style={{
                textDecoration: exercise.completed ? 'line-through' : 'none',
                flexGrow: 1
              }}
            >
              {exercise.name} - {exercise.type}
            </span>
            <button onClick={() => onRemoveExercise(exercise.id)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyPlan;
