import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      &nbsp;
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterApp;
