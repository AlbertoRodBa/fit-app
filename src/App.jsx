import React, { useState } from "react";
import WeeklyPlan from "./components/WeeklyPlan";
import ExerciseForm from "./components/ExerciseForm";
import { exercises as initialExercises } from "./data/exercises";

const App = () => {
  const [exercises, setExercises] = useState(initialExercises);

  const handleAddExercise = (newExercise) => {
    setExercises([...exercises, { id: exercises.length + 1, ...newExercise }]);
  };

  const handleToggleComplete = (exerciseId) => {
    setExercises(
      exercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      )
    );
  };

  const handleRemoveExercise = (exerciseId) => {
    setExercises(exercises.filter((exercise) => exercise.id !== exerciseId));
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
