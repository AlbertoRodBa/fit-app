import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const ExerciseForm = ({ onAddExercise, onResetExercises }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [day, setDay] = useState("Lunes");
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar modal

  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type) return;
    onAddExercise({ name, type, day });
    setName("");
    setType("");
  };

  // Función para abrir el modal al hacer click en Restablecer
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función que se ejecuta si el usuario confirma borrar
  const handleConfirmReset = () => {
    onResetExercises();
    setModalOpen(false);
  };

  return (
    <div className="mb-4 pt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:items-center md:space-x-4"
      >
        <input
          type="text"
          placeholder="Nombre del ejercicio"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 bg-white text-gray-800 rounded px-4 py-2 flex-grow mb-2 md:mb-0"
        />
        <input
          type="text"
          placeholder="Zona muscular"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="border border-gray-300 bg-white text-gray-800 rounded px-4 py-2 flex-grow mb-2 md:mb-0"
        />
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border border-gray-300 bg-white text-gray-800 rounded px-4 py-2 mb-2 md:mb-0"
        >
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-[#733BFF] text-white rounded px-4 py-2 hover:bg-[#592BCC] transition duration-200 w-full md:w-auto"
        >
          Agregar Ejercicio
        </button>
      </form>
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleOpenModal} // Abre el modal al hacer click
          className="bg-[#733BFF] text-white rounded px-4 py-2 transition duration-200 w-auto hover:bg-[#592BCC]"
        >
          Restablecer
        </button>
      </div>

      {/* Aquí insertas el modal */}
      <ConfirmDialog
        open={modalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleConfirmReset}
        title="Restablecer Ejercicios"
        description="Se borrarán todos los ejercicios. ¿Quieres continuar?"
      />
    </div>
  );
};

export default ExerciseForm;
