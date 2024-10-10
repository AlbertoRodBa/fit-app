import React, { useState } from "react";
import WeeklyPlan from "./components/WeeklyPlan";
import ExerciseForm from "./components/ExerciseForm";
import exercisesData from "./data/exercises.json"; // Importa el archivo JSON

const App = () => {
  const [exercises, setExercises] = useState(exercisesData); // Inicializa con los ejercicios del JSON

  const handleAddExercise = (exercise) => {
    const newExercise = { id: Date.now(), ...exercise, completed: false };
    setExercises((prevExercises) => [...prevExercises, newExercise]);
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
