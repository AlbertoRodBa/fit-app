import React, { useState } from 'react';
import WeeklyPlan from './components/WeeklyPlan';
import ExerciseForm from './components/ExerciseForm';
import { exercises as initialExercises } from './data/exercises';

const App = () => {
  const [exercises, setExercises] = useState(initialExercises);

  const addExercise = (newExercise) => {
    setExercises((prevExercises) => [
      ...prevExercises,
      { id: prevExercises.length + 1, ...newExercise },
    ]);
  };

  const deleteExercise = (id) => {
    setExercises((prevExercises) => 
      prevExercises.filter(exercise => exercise.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Mi Plan de Ejercicios</h1>
      <ExerciseForm onAddExercise={addExercise} />
      <WeeklyPlan exercises={exercises} onDelete={deleteExercise} />
    </div>
  );
};

export default App;
