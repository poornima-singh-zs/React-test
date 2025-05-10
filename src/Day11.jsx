
import { useState } from 'react'
// import Test from './React-test Day10/Test';
import './Day11.css'
import ChildComp from './React-test Day11/ChildComp'



// export default function App() {
  // const items=[
  //   {
  //     title:"Hello Poornima",
  //     description: "Hello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh ",
      
  //   }
  // ];

//   const [numDice, setNumDice] = useState(0);
//   const [showDice, setShowDice] = useState(0);
//   const [error, setError] = useState('');

//   const handleRollDice = () => {
//     if(numDice>=1 && numDice<=6){
//       setShowDice(numDice);
//       setError('');
//   }
//   else{
//     setError('Please enter a number between 1 and 6');
//   }
// }
  
//   return (
//     <div className='parent' >
    
//     <input
//         type="number"
//         min="1"
//         max="6"
//         value={numDice}
//         onChange={(e) => setNumDice(Number(e.target.value))}
//         placeholder="Enter number of dice"
//       />
//        {error && <p className="error">{error}</p>} 
//     <button className='roll' onClick={handleRollDice}> Roll</button>
//     <ChildComp  numDice={showDice}/>
//     {/* <Test title={items[0].title} description={items[0].description} /> */}
//     </div>
//   )
// }




//Task 3 day 11

export default function Day11() {
  const [targetSum, setTargetSum] = useState('');
  const [validRolls, setValidRolls] = useState([]);
  const [error, setError] = useState('');

  const handleRollDice = () => {
    const num = parseInt(targetSum, 10);

    if (num >= 2 && num <= 12) {
      setError('');
      const rolls = [];
      for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
          if (i + j === num) {
            rolls.push([i, j]);
          }
        }
      }
      setValidRolls(rolls);
    } else {
      setError('Please enter a number between 2 and 12');
      setValidRolls([]);
    }
  };

  return (
    <div className="parent">
      <input
        type="number"
        min="2"
        max="12"
        value={targetSum}
        onChange={(e) => setTargetSum(e.target.value)}
        placeholder="Enter a number (2-12)"
      />
      {error && <p className="error">{error}</p>}
      <button className="roll" onClick={handleRollDice}>
        Roll
      </button>

      <ChildComp validRolls={validRolls} />
    </div>
  );
}
