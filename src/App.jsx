
import React , { useState } from 'react'
// import Test from './React-test Day10/Test';
import './App.css'
import ChildComp from '../src/React-test Day11/ChildComp'
import { Counter } from './React Day12/Counter';



export default function App() {
  // const items=[
  //   {
  //     title:"Hello Poornima",
  //     description: "Hello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh  ello my name is poornima singh ello my name is poornima singh ",
      
  //   }
  // ];

  const [numDice, setNumDice] = useState(0);
  const [showDice, setShowDice] = useState(0);
  const [error, setError] = useState('');

  const handleRollDice = () => {
    if(numDice>=1 && numDice<=6){
      setShowDice(numDice);
      setError('');
  }
  else{
    setError('Please enter a number between 1 and 6');
  }
}
  
  return (
    <div className='parent' >
    
    {/* <input
        type="number"
        min="1"
        max="6"
        value={numDice}
        onChange={(e) => setNumDice(Number(e.target.value))}
        placeholder="Enter number of dice"
      />
       {error && <p className="error">{error}</p>} 
    <button className='roll' onClick={handleRollDice}> Roll</button>
    <ChildComp  numDice={showDice}/> */}
    {/* <Test title={items[0].title} description={items[0].description} /> */}
    <Counter/>
    </div>
  )
}




