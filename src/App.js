import React from "react";
import Weather from "./Weather";
import Skeleton from "./Skeleton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Skeleton />
        <footer>
          Coded by Helene J. Belling (open-sourced on{" "}
          <a href="https://github.com/juulbell/weather-react" target="_blank">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://serene-fermat-86cece.netlify.app/" target="_blank">
            Netlify)
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
