import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  //let count=0;
 let [count,setCount]=useState(0)
  const addValue=()=>{
    count+=1;
    setCount(count);
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <button onClick={addValue}>Click</button>
    <p>Button clicked {count} times</p>
    </div>
  )
}

export default App
