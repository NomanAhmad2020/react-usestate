import React from 'react';
import { useState} from 'react';
import "./style.css";

 const  App = () => {
  
  //const state = useState();
  
  const [count,setCount] = useState(1);

  const buttonClick = () => {
      setCount(count+1);
    };
 
    const button2Click = () => {
   
    setCount(count-1);
  };
  const button3Click = () => {
    
      setCount(0);       // same count =0

};
  return (
    <>
       <h1> {count} </h1>
      <button onClick={buttonClick}> + </button>
      <button onClick={button2Click}> - </button>
      <br></br>
      <button onClick={button3Click}> Reset </button>
    </>
);
};
export default App;

// define state
// define call back function to perform whatever we want
// we use more then one function to state like count can be plus and minus