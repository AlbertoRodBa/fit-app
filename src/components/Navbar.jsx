import React from "react";

const Navbar = ({ theme, onToggleTheme }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <nav className="bg-[#6628b4] text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-center space-x-4">
        {/* Logo + título */}
        <div
          onClick={handleReload}
          className="flex items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-10 h-10"
            fill="#705fff"
            stroke="#ffffff"
            strokeWidth="1em"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" />
          </svg>
          <h1 className="text-white text-2xl ml-2 cursor-pointer">
            Mi Plan de Ejercicios
          </h1>
        </div>

        {/* Botón */}
        <button
          onClick={onToggleTheme}
          className="bg-white text-[#6628b4] px-4 py-2 rounded hover:bg-gray-200 transition max-w-[140px] w-full sm:w-auto mx-auto"
        >
          Modo: {theme === "light" ? "Claro" : "Oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
