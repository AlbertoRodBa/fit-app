import React, { useState, useRef, useEffect } from "react";

const Timer = ({ onClose }) => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => setMilliseconds(ms => ms + 10), 10);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setMilliseconds(0);
    stop();
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Format time as mm:ss:ms
  const minutes = String(Math.floor(milliseconds / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, "0");
  const ms = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, "0");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
        {/* Spinning animation */}
<div className="relative mb-4">
  <div
    className={`w-24 h-24 rounded-full border-4 border-blue-400 ${
      running ? "animate-pulse" : ""
    }`}
  ></div>
  <span className="absolute inset-0 flex items-center justify-center text-3xl font-mono select-none">
    {minutes}:{seconds}:{ms}
  </span>
</div>
        <div className="flex gap-2 mb-4">
          <button onClick={start} disabled={running} className="btn font-bold">Iniciar</button>
          <button onClick={stop} disabled={!running} className="btn font-bold">Pausar</button>
          <button onClick={reset} className="btn font-bold">Reset</button>
        </div>
        <button onClick={onClose} className="text-red-400 font-bold">Cerrar</button>
      </div>
    </div>
  );
};

export default Timer;