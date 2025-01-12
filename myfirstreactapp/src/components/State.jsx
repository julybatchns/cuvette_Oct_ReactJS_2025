import { useState } from "react";

const State = () => {
  // ? const [state, setState] = useState(initialValue);
  const [count, setCount] = useState(0);
  console.log("State Component Render");

  // Destructing Arrays and Objects
  // ! JavaScript destructuring is a convenient way to extract values from arrays and objects and assign them to variables. This technique simplifies your code and improves readability.

  // const numbers = [1, 2, 3, 4, 5];
  // const [first, , third, fourth, fifth, sixth = 6] = numbers;

  // console.log(first);
  // console.log(second);
  // console.log(third);
  // console.log(fourth);
  // console.log(fifth);
  // console.log(sixth);

  // const person = { name: "Cuvette", age: 34 };
  // const { name: fullName, age, address = "USA" } = person;

  // console.log(fullName);
  // console.log(age);
  // console.log(address);

  // ? The Rest Operator collects multiple elements into a single array or object. It is typically used in function arguments or destructuring assignments.

  // function sum(...numbers) {
  //   return numbers.reduce((total, num) => total + num, 0);
  // }

  // console.log(sum(1, 2, 3, 4, 5));

  // const [first, second, ...rest] = [10, 20, 30, 40, 50];
  // console.log(first);
  // console.log(second);
  // console.log(rest);

  // const person = {
  //   name: "Alice",
  //   age: 25,
  //   city: "New York",
  //   profession: "Engineer",
  // };

  // const { name, ...details } = person;
  // console.log(name);
  // console.log(details);

  // ! The Spread Operator expands elements of an array or object into individual elements or properties.

  // const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // const combinedArray = [...arr1, ...arr2];
  // console.log(combinedArray);

  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const merged = { ...obj1, ...obj2 };
  console.log(merged);

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
