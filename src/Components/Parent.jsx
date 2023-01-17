import React, { useState,useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState([]);

  const  fun = useCallback(()=> {
    console.log("hello world")
  },[count2]);


  return (
    <div>
      <h1>{count}</h1>
      <Child count2={count2} fun={fun} />
      <button onClick={() => setCount(count + 1)}>Button</button>
    </div>
  );
};

export default Parent;
