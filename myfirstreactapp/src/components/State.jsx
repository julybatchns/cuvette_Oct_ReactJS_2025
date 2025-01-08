import { useState } from "react";

const State = () => {
  // ? const [state, setState] = useState(initialValue);
  const [count, setCount] = useState(0);
  console.log("State Component Render");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>The useState Hook - Counter</h3>
          <br />
          <h1>Count: {count}</h1>
          <br />
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default State;

// Array Destructing, Object Destructing
// Spread Operator ...
// Rest Operator ...
