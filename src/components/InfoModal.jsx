import React from "react";

const InfoModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Información
        </h2>
        <div className="text-gray-700 dark:text-gray-200 mb-4 space-y-2">
          <p>Planifica tus ejercicios de la semana de manera sencilla.</p>
          <p>
            Agrega los ejercicios que quieras realizar, marca los que ya
            completaste y lleva un registro de tu progreso para no olvidar lo
            que ya hiciste.
          </p>
          <p>¡Mantente motivado y alcanza tus objetivos paso a paso!</p>
          <p>
            ¿Buscas medir tus tiempos? Usa el cronómetro integrado.
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-[#733BFF] text-white rounded px-4 py-2 hover:bg-[#592BCC] transition duration-200"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
