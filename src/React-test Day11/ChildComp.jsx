import React, { useEffect, useState } from 'react';
import dice1 from '../assets/dice1.png';
import dice2 from '../assets/dice2.png';
import dice3 from '../assets/dice3.png';
import dice4 from '../assets/dice4.png';
import dice5 from '../assets/dice5.png';
import dice6 from '../assets/dice6.png';
import loader from '../assets/loadergf.webp';
import './ChildComp.css';

const ChildComp = ({ numDice }) => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [displayedDice, setDisplayedDice] = useState(0);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (numDice > 0) {
      setDisplayedDice(0); 
      setShowLoader(true);

      setTimeout(() => {
        setShowLoader(false);
      
      
      let count = 0;
      
      const interval = setInterval(() => {
        count++;
        setDisplayedDice(count);

        if (count >= numDice) {
          clearInterval(interval); 
        }
      }, 1000);
    },2000)

      return () => {
        clearTimeout(loaderTimeout);
        clearInterval(interval);
      }

   
    }
  }, [numDice]);
  return (
    <div className="container">
      {showLoader ? (
        <img src={loader} alt="Loading..." className="spinner" style={{height:'40px' , width:'40px'}} />
      ) : (
        Array.from({ length: displayedDice }, (_, index) => (
          <img
            key={index}
            src={diceImages[index]}
            alt={`Dice ${index + 1}`}
            className="dice-image"
          />
        ))
      )}
    </div>
  );
};

export default ChildComp;


























