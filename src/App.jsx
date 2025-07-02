import { useState, useEffect } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  // You can persist animation state here if desired with localStorage
  useEffect(() => {
    // If we wanted to skip animation after first load:
    // const hasSeenAnimation = localStorage.getItem('seenAnimation');
    // if (hasSeenAnimation) setIsAnimationDone(true);
  }, []);

  return (
    <>
      {!isAnimationDone ? (
        <OpeningAnimation onFinish={() => {
          setIsAnimationDone(true);
          // Optional: localStorage.setItem('seenAnimation', 'true');
        }} />
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
