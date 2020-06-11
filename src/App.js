import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Frankfurt" />

        <footer>
          Coded by Helene J. Belling (
          <a href="https://github.com/juulbell/weather-react" target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://serene-fermat-86cece.netlify.app/" target="_blank">
            hosted on Netlify)
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
