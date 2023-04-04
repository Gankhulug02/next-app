import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count * 2)}>multiply</button>
      <button onClick={() => setCount(count / 2)}>/2</button>
    </div>
  );
};

export default Count;
