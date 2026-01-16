import React, { useState, useEffect, useRef } from 'react';

export default function StudyTimer() {
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(focusDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            if (!isBreak) {
              setIsBreak(true);
              return breakDuration * 60;
            } else {
              setIsBreak(false);
              return focusDuration * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, focusDuration, breakDuration, isBreak]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(focusDuration * 60);
  };

  const handleFocusChange = (e) => {
    const value = parseInt(e.target.value);
    setFocusDuration(value);
    if (!isRunning && !isBreak) {
      setTimeLeft(value * 60);
    }
  };

  const handleBreakChange = (e) => {
    const value = parseInt(e.target.value);
    setBreakDuration(value);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5dc', padding: '2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e3a4a' }}>Study Timer</h1>
          <p style={{ fontSize: '0.875rem', color: '#5a6b78' }}>Track your focus sessions</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            backgroundColor: '#f5f2ea', 
            borderRadius: '1rem', 
            border: '2px solid #4a6b78', 
            padding: '4rem', 
            width: '100%', 
            maxWidth: '32rem' 
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2c4a5a', textAlign: 'center', marginBottom: '2rem' }}>
              Focus Time
            </h2>
            
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '5rem', fontWeight: 'bold', color: '#2c4a5a', letterSpacing: '0.05em' }}>
                {formatTime(timeLeft)}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
              <button
                onClick={handleStart}
                disabled={isRunning}
                style={{
                  padding: '0.75rem 2.5rem',
                  backgroundColor: isRunning ? '#9db3bd' : '#4a6b78',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  border: 'none',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  opacity: isRunning ? 0.5 : 1,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  if (!isRunning) e.target.style.backgroundColor = '#3d5a66';
                }}
                onMouseLeave={(e) => {
                  if (!isRunning) e.target.style.backgroundColor = '#4a6b78';
                }}
              >
                Start
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '0.75rem 2.5rem',
                  backgroundColor: 'transparent',
                  color: '#2c4a5a',
                  border: '2px solid #4a6b78',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#4a6b78';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#2c4a5a';
                }}
              >
                Reset
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: '600', color: '#3d5563', marginBottom: '0.75rem' }}>
                  Focus Duration (minutes)
                </label>
                <select
                  value={focusDuration}
                  onChange={handleFocusChange}
                  disabled={isRunning}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'white',
                    border: '1px solid #c5bfb1',
                    borderRadius: '0.5rem',
                    color: '#3d5563',
                    fontSize: '1rem',
                    cursor: isRunning ? 'not-allowed' : 'pointer',
                    opacity: isRunning ? 0.5 : 1,
                    outline: 'none'
                  }}
                >
                  <option value={15}>15 minutes</option>
                  <option value={25}>25 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: '600', color: '#3d5563', marginBottom: '0.75rem' }}>
                  Break Duration (minutes)
                </label>
                <select
                  value={breakDuration}
                  onChange={handleBreakChange}
                  disabled={isRunning}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'white',
                    border: '1px solid #c5bfb1',
                    borderRadius: '0.5rem',
                    color: '#3d5563',
                    fontSize: '1rem',
                    cursor: isRunning ? 'not-allowed' : 'pointer',
                    opacity: isRunning ? 0.5 : 1,
                    outline: 'none'
                  }}
                >
                  <option value={5}>5 minutes</option>
                  <option value={10}>10 minutes</option>
                  <option value={15}>15 minutes</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}