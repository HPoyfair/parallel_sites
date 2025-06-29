import { useEffect, useState } from 'react';
import './OpeningAnimation.css';

function OpeningAnimation({ onFinish }) {
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlay(false);
      onFinish(); // trigger app content to load
    }, 3000); // duration of animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    play && (
      <div className="animation-overlay">
        <div className="monitor">
          <div className="line left-line" />
          <div className="line right-line" />
        </div>
      </div>
    )
  );
}

export default OpeningAnimation;
