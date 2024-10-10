import React, { useState } from "react";
import WeeklyPlan from "./components/WeeklyPlan";
import ExerciseForm from "./components/ExerciseForm";
import { exercises as initialExercises } from "./data/exercises";

const App = () => {
  const [exercises, setExercises] = useState(initialExercises);

  const handleAddExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, { ...exercise, completed: false }]);
  };

  const handleToggleComplete = (exerciseName) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.name === exerciseName ? { ...exercise, completed: !exercise.completed } : exercise
      )
    );
  };

  const handleRemoveExercise = (exerciseName) => {
    setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.name !== exerciseName));
  };

  return (
    <div>
      <h1>Mi Plan de Ejercicios</h1>
      <ExerciseForm onAddExercise={handleAddExercise} />
      <WeeklyPlan 
        exercises={exercises} 
        onToggleComplete={handleToggleComplete} 
        onRemoveExercise={handleRemoveExercise} 
      />
    </div>
  );
};

export default App;
