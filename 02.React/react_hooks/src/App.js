import logo from "./logo.svg";
import React, { Component, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
    console.log(updateEmail);
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
      <p>{email}</p>
    </div>
  );
};

export default App;
