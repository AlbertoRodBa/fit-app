import React, { useState, useEffect } from "react";
import WeeklyPlan from "./components/WeeklyPlan";
import ExerciseForm from "./components/ExerciseForm";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Timer from "./components/Timer"; 

const App = () => {
  const [exercises, setExercises] = useState(() => {
    const storedExercises = localStorage.getItem("exercises");
    return storedExercises ? JSON.parse(storedExercises) : [];
  });

  const handleResetExercises = () => {
    setExercises([]);
  };

  const [showTimer, setShowTimer] = useState(false);


  // Estado para el tema: 'light' o 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Cambiar tema y guardarlo en localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Guardar ejercicios en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  // Agregar o quitar clase 'dark' en <html> según el tema
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Handler para agregar ejercicios
  const handleAddExercise = (exercise) => {
    const newExercise = { id: Date.now(), ...exercise, completed: false };
    setExercises((prev) => [...prev, newExercise]);
  };

  // Handler para marcar como completado o no un ejercicio por id
  const handleToggleComplete = (id) => {
    const updated = exercises.map((ex) =>
      ex.id === id ? { ...ex, completed: !ex.completed } : ex
    );
    setExercises(updated);
  };

  // Eliminar un ejercicio por id
  const handleRemoveExercise = (id) => {
    const filtered = exercises.filter((ex) => ex.id !== id);
    setExercises(filtered);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors flex flex-col items-center px-4">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="pt-20 w-full max-w-3xl">
        <ExerciseForm
          onAddExercise={handleAddExercise}
          onResetExercises={handleResetExercises}
        />
<WeeklyPlan
  exercises={exercises}
  onToggleComplete={(id) => {
    const updated = exercises.map((ex) =>
      ex.id === id ? { ...ex, completed: !ex.completed } : ex
    );
    setExercises(updated);
  }}
  onRemoveExercise={(id) => {
    const filtered = exercises.filter((ex) => ex.id !== id);
    setExercises(filtered);
  }}
/>

      </div>
          {showTimer && <Timer onClose={() => setShowTimer(false)} />}
    <Footer onTimerClick={() => setShowTimer(true)} />
    </div>
  );
};

export default App;
