import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
      {/* <ParallaxProvider> */}
      <Route path="/">
        <App />
      </Route>
      {/* </ParallaxProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
