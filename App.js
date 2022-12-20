import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./components/Question.js";

function App() {
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question choice={data[0].question} />
    </div>
  );
}

export default App;
