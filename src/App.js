import React from "react";
import Skeleton from "./Skeleton";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Skeleton defaultCity="Frankfurt" />
        <footer>
          Coded by Helene J. Belling (open-source on{" "}
          <a href="https://github.com/juulbell/weather-react" target="_blank">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              alt="Logo"
              id="githubLogo"
            />
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
