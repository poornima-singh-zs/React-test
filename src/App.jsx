
import React , { useState } from 'react'

// import './App.css'
import Modal from '../src/Day13/Modal'



export default function App() {
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

// Day 13 Modal Test by Anirudh

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

return(
  <Modal isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal}></Modal>
)


}



