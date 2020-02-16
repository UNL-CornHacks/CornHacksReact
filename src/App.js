import React from "react";
import logo from "./cornhacks.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CornHacks 2021 Website!</p>
        <p>
          Questions? Contact us at:
          <br />
          <a
            className="App-link"
            href="mailto:info@cornhacks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@cornhacks.com
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
