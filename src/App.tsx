import React from "react";
import "./App.css";
import User from "./Folder/User";

function App() {
  return (
    <div className="App">
      <User
        name="raihan"
        age={20}
        isAdult={true}
        lang={["bangla", "english", "hindi"]}
      ></User>
    </div>
  );
}

export default App;
