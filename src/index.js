import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* The idea is to create super resusable component */}
    <StarRating maxRating={5} />
    {/* <StarRating maxRating={15} />
    <StarRating /> */}
  </React.StrictMode>
);
