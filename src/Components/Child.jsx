import React, { memo } from "react";

const Child = ({ count2, setCount2 }) => {
  console.log("child is called");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(Child);
