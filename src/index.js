import React from "react";
import ReactDOM from "react-dom";
import Annotataor from "./annotator";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Annotataor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
