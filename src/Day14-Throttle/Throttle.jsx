import React,{useState} from "react";

export default function Throttle(){

  function handleclick()
  {
    let id,id2;
    let count = 0;
    function innerfn(event)
    {
      if(!id)
      {
        id2 = setInterval(()=>{
          let time = new Date();
          count++;
          console.log("count:",count," Time = ",time);
        },3000);
      }
      clearTimeout(id);
      id = setTimeout(()=>{
        let time = new Date();
        console.log(count," Time = ",time);
        count = 0;
        clearTimeout(id2);
        id = undefined;
      },1000);
    }
    return innerfn;
  }
  return(
    <button onClick={handleclick()}>hello</button>
  )
}