import React from "react";

const Footer = ({ onTimerClick }) => (
  <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-center items-center py-1 z-50">
    <button
      onClick={onTimerClick}
      className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-500 mb-2"
      aria-label="Open Timer"
    >
      ⏱️
    </button>
  </footer>
);

export default Footer;