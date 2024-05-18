import React, { useState, useRef, useEffect } from 'react';
import bgwatch from './img-restaurant/bgstopwatch.png'

const Makan = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);
  const backgroundImage = "src/img-restaurant/masuk-restoran.png";

  const goBack = () => {
    window.history.back();
  };
  
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage]);

  const startPause = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const lap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (milliseconds) => {
    const getMilliseconds = `00${milliseconds % 1000}`.slice(-3);
    const seconds = Math.floor(milliseconds / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds},${getMilliseconds}`;
  };

  return (
    <div className="stopwatch-container grid grid-rows-1 items-center justify-center min-h-screen" style={{ backgroundImage: `url(${bgwatch})`}}>
      <div className="stopwatch-box bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-lg text-center w-100">
        <h1 className="text-3xl font-bold mb-4">Cooking Stopwatch</h1>
        <p className="text-sm mb-6">Gunakan stopwatch ini untuk membantu kamu masak!</p>
        <div className="text-4xl font-mono mb-6 whitespace-nowrap">{formatTime(time)}</div>
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={startPause}
            className={`px-6 py-3 rounded-lg ${isRunning ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-green-500 hover:bg-green-700'} text-white`}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={lap}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            disabled={!isRunning}>
            Lap
          </button>
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Reset
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Laps</h2>
          <ul className="list-none pl-0 max-h-40 overflow-y-auto">
            {laps.map((lap, index) => (
              <li key={index} className="text-lg text-center">{formatTime(lap)}</li>
            ))}
          </ul>
        </div>
        <button onClick={goBack} className="mt-4 p-2 text-lg bg-pink-400 text-white rounded hover:bg-red-200 shadow">
        Kembali
      </button>
      </div>
      
    </div>
  );
};

export default Makan;
