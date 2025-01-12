# cuvette_Oct_ReactJS_2025

MERN => MongoDB, Express JS, React JS, Node JS
#1. React JS => UI Library
#2. Component Based Architecture.
#3. Single Page Application (SAP)
#4. One way Data Binding
#5. Virtual DOM vs Real DOM
#6. Props.

A. Why React JS?
B. What is React JS?
C. Setup React JS Project? -- Vite Tool
D. Folder Structure

# 1. React CSS Stylings.

# 2. Conditional Rendering.

# 3. List Rendering.

# 4. Props - P to C and vice-versa (Context API or Redux)

# 5. React JS Architecture & Terms

# 6. Hooks

# A. React.js is a front-end JavaScript library for building user interfaces (UIs). Its architectural flow emphasizes efficiency, modularity, and responsiveness. The core elements of React include its component-based structure, one-way data binding, and virtual DOM for efficient updates

# A.1 Single Page Application (SPA)

A SPA dynamically updates the content of a web page without reloading the entire page. React uses components to manage the structure and state of SPAs.

# B.2. Unidirectional (One-way) Data Binding

function ParentComponent() {
const message = "Hello from Parent!";
return <ChildComponent message={message} />;
}

function ChildComponent({ message }) {
return <h1>{message}</h1>;
}

# B.3. Virtual DOM

The Virtual DOM is a lightweight, in-memory representation of the real DOM. React uses it to optimize updates and rendering in your application. Instead of directly modifying the DOM, React uses the Virtual DOM to determine the most efficient way to update the user interface.

1. Initial Rendering

   1. DOM
   2. It then syncs (or "mounts") this Virtual DOM to the real DOM.

2. Updating Phase
   1. When a state or prop changes, React creates a new Virtual DOM.
   2. React compares the new Virtual DOM with the previous one (a process called reconciliation) to determine what changed.
3. Efficient Updates
   1. React identifies the minimal number of changes required and updates only those parts of the real DOM (using diffing and patching algorithms).

B. React Hooks

A Hook is a special function in React that lets you "hook into" React state and lifecycle features in functional components. Hooks were introduced in React 16.8 to enable state management and other React features in functional components, eliminating the need to use class components for these purposes.

1. Hooks can only be used in functional components.
2. All hooks start with the prefix use (e.g., useState, useEffect).
