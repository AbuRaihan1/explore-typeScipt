import React from "react";
import "./App.css";
import User from "./Folder/User";

function App() {
  const skill = {
    isHePlayed: true,
    heGoesSchool: "yes",
    howManyYearsHeLeanProgramming: 6,
  };
  return (
    <div className="App">
      <User
        name="raihan"
        age={20}
        isAdult={true}
        lang={["bangla", "english", "hindi"]}
        skill={skill}
      ></User>
    </div>
  );
}

export default App;
