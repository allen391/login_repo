import React from "react";
import ReactDOM from "react-dom";
import InputBox from './inputbox/inputbox';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <InputBox/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
