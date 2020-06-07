import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and scave to reload .
        </p>
        <Weather city="Frankfurt" />
      </header>
    </div>
  );
}

export default App;
