import * as React from "react";
import "./App.css";
// import logo from "./logo.svg";
import pfp from "./images/pfp.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pfp} className="App-logo" alt="logo" />
        <p>React Website Example</p>
        <a
          className="App-link"
          href="https://github.com/0xm3ga"
          target="_blank"
          rel="noopener noreferrer"
        >
          0xm3ga's GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
