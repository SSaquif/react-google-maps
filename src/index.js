import React from "react";
import ReactDOM from "react-dom";
import Normalize from "./Styles/CSS/Normalize";
import ReducedMotion from "./Styles/CSS/ReducedMotion";
import CSSVariables from "./Styles/CSS/CSSVariables";

import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <CSSVariables />
    <Normalize />
    <ReducedMotion />
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
