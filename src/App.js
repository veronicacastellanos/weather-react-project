import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>Weather App</h1>
      <Weather />
    </div>
        <footer>
        <a className="source"
          href="https://github.com/veronicacastellanos"
          target="_blank"
          rel="noopener noreferrer" ></a>
        </footer>
    </div>
  );
}

export default App;


