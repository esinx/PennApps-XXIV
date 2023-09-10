
import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const chars = ['M', 'a', 'p', 'I', 't'];
  const getRandomPosition = () => Math.floor(Math.random() * 100);

  return (
    <div className="splash-container">
      {chars.map((char, index) => (
        <div 
          key={index} 
          className={`char char-${index} ${animate ? 'animate' : ''}`} 
          style={{
            left: `${getRandomPosition()}%`,
            top: `${getRandomPosition()}%`
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

