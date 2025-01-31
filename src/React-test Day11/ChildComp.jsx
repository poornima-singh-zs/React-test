import React from 'react';
import dice1 from '../assets/dice1.png';
import dice2 from '../assets/dice2.png';
import dice3 from '../assets/dice3.png';
import dice4 from '../assets/dice4.png';
import dice5 from '../assets/dice5.png';
import dice6 from '../assets/dice6.png';
import './ChildComp.css';

// const ChildComp = ({ numDice }) => {
//   const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
//   return (
//     <div className="container">
//       {Array.from({ length: numDice }, (_, index) => (
//         <img
//           key={index}
//           src={diceImages[index]}
//           alt={`Dice ${index + 1}`}
//           className="dice-image"
//         />
//       ))}
//     </div>
//   );
// };

//Task 3 enhancements
const ChildComp = ({ validRolls }) => {
  const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];
return (
  <div className="container">
  { validRolls.map(([die1, die2], index) => (
    <div key={index} className="dice-pair">
      <img src={diceImages[die1]} alt="" className="dice-image" />
      <img src={diceImages[die2]} alt="" className="dice-image" />
    </div>
  ))}
</div>
);
};

 export default ChildComp;

























