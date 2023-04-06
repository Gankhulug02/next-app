import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className="border-red-500" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button className="text-yellow-500" onClick={() => setCount(count * 2)}>
        multiply
      </button>
      <button onClick={() => setCount(count / 2)}>/2</button>
    </div>
  );
};

export async function getStaticProps() {}

export default Count;
