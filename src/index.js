import React from "react";
import ReactDOM from "react-dom";
//----------------------------------------------------------------------

//JSX allows us to insert html in JS and inject JS inside the
//html content as well, using the curly brackets -> {} <-
//however, we can not write JS statements like: if-else or Functions

const fName = "Taha";
const lName = "Ahmed";
const luckyNumber = Math.floor(Math.random() * 10);
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!{" "}
    </h1>
    <p>Your Lucky Number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);
