import React, { useState, useEffect } from 'react';

const Counter = ({ initialNumber, speed }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const targetNumber = initialNumber;
    const incrementNumber = Math.trunc(targetNumber / speed);

    const updateNumber = () => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prevNumber) => prevNumber + incrementNumber);
        setTimeout(updateNumber, 10);
      } else {
        setCurrentNumber(targetNumber);
      }
    };

    updateNumber();
  }, [initialNumber, speed, currentNumber]);

  return <span className="counter-numbers">{currentNumber}+</span>;
};

export default Counter;
