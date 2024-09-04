import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeText = () => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index++;
        timeoutId = setTimeout(typeText, speed);
      } else {
        // Pause após completar a digitação
        setTimeout(() => {
          setDisplayedText('');
          index = 0;
          timeoutId = setTimeout(typeText, speed);
        }, pause);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, [text, speed, pause]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
