import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function stop() {
    setSeconds(seconds);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
        <h1>{seconds}s</h1>
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={stop}>
          Stop
        </button>
    </>
  );
};

export default Timer;