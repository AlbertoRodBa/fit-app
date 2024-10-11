import React, { useState, useEffect } from "react";
import WeeklyPlan from "./components/WeeklyPlan";
import ExerciseForm from "./components/ExerciseForm";
import Navbar from "./components/Navbar"; 

const App = () => {
  const [exercises, setExercises] = useState(() => {
    // Cargar ejercicios desde localStorage o inicializar con un array vacío
    const storedExercises = localStorage.getItem("exercises");
    return storedExercises ? JSON.parse(storedExercises) : [];
  });

  const handleAddExercise = (exercise) => {
    const newExercise = { id: Date.now(), ...exercise, completed: false };
    const updatedExercises = [...exercises, newExercise];
    setExercises(updatedExercises);
    localStorage.setItem("exercises", JSON.stringify(updatedExercises)); // Actualizar localStorage
  };

  const handleToggleComplete = (exerciseName) => {
    const updatedExercises = exercises.map((exercise) =>
      exercise.name === exerciseName ? { ...exercise, completed: !exercise.completed } : exercise
    );
    setExercises(updatedExercises);
    localStorage.setItem("exercises", JSON.stringify(updatedExercises)); // Actualizar localStorage
  };

  const handleRemoveExercise = (exerciseName) => {
    const updatedExercises = exercises.filter((exercise) => exercise.name !== exerciseName);
    setExercises(updatedExercises);
    localStorage.setItem("exercises", JSON.stringify(updatedExercises)); // Actualizar localStorage
  };

  return (
    <div>
      <Navbar /> {/*  barra de navegación aquí */}
      <h1 className="text-2xl text-center">Mi Plan de Ejercicios</h1> {/* título */}
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
