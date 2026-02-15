import React,{useState} from "react";
function Counter(){
  const [count,setCount]= useState(0);
  const increament = () => {
    setCount(count+1);
  }
  const decrement = () => {
    setCount(count-1)
  }
  const reset = () => {
    setCount(0)
  }

  return(
    <div className="main-div">
      <p className="para">{count}</p>
        <button onClick={increament} className="counter-button">INCREAMENT</button>
        <button onClick={decrement} className="counter-button">DECREAMENT</button>
        <button onClick={reset} className="counter-button">RESET</button>
    </div>
  );
}
export default Counter