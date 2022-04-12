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
    // if (count == 0 ? 1 :count ){
    //   return;
    // }
    setCount(count-1);

};
  return (
    <>
       <h1> {count} </h1>
      <button onClick={buttonClick}> + </button>
      <button onClick={button2Click}> - </button>
    </>
);
};
export default App;

// define state
// define call back function to perform whatever we want
// we use more then one function to state like count can be plus and minus