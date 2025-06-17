import React from 'react';

const WeeklyPlan = ({ exercises, onToggleComplete, onRemoveExercise }) => {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  
  const groupedExercises = daysOfWeek.reduce((acc, day) => {
    acc[day] = exercises.filter(exercise => exercise.day === day);
    return acc;
  }, {});

  return (
    <div>
      <h2>Plan Semanal</h2>
      {daysOfWeek.map(day => (
        <div key={day}>
          <h3>{day}</h3>
          <ul>
            {groupedExercises[day].length > 0 ? (
              groupedExercises[day].map(exercise => (
                <li key={exercise.id} className={exercise.completed ? 'completed' : ''}>
                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={exercise.completed} 
                      onChange={(e) => {
                        e.stopPropagation();
                        onToggleComplete(exercise.id);
                      }} 
                    />
                    <span className="exercise-text">
                      {exercise.name} - {exercise.type}
                    </span>
                  </div>
                  <button 
                    className="delete-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveExercise(exercise.id);
                    }}
                  >
                    Eliminar
                  </button>
                </li>
              ))
            ) : (
              <li style={{ color: '#6f7590', fontStyle: 'italic' }}>
                No hay ejercicios programados para este día.
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WeeklyPlan;
