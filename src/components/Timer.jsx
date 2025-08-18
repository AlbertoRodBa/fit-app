import React, { useState, useRef } from "react";

const Timer = ({ onClose }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setSeconds(0);
    stop();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <span className="text-4xl mb-4">{new Date(seconds * 1000).toISOString().substr(11, 8)}</span>
        <div className="flex gap-2 mb-4">
          <button onClick={start} disabled={running} className="btn">Start</button>
          <button onClick={stop} disabled={!running} className="btn">Stop</button>
          <button onClick={reset} className="btn">Reset</button>
        </div>
        <button onClick={onClose} className="text-red-500">Close</button>
      </div>
    </div>
  );
};

export default Timer;