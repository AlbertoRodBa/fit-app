import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#6628b4] text-white p-4 fixed top-0 left-0 w-full z-10"> {/* Añadido 'fixed' y 'top-0' */}
      <h1 className="text-2xl text-center text-white">Mi Plan de Ejercicios 🏋️</h1>
    </nav>
  );
};

export default Navbar;
