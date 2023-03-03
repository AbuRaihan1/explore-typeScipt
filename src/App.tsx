import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./Folder/User";

function App() {
  return (
    <div className="App">
      <User name="raihan" age={20} isAdult={true}></User>
    </div>
  );
}

export default App;
