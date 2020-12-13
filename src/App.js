import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>All Time Weather</h1>
      <Weather />
    </div>
        <footer>
          <a className="source"
            href="https://github.com/veronicacastellanos/weather-react-project"
            target="_blank"
          >
            Open-sourced on GitHub
          </a>
        </footer>
    </div>
  );
}

export default App;


