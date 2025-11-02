import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
// import "./assets/styles/index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Bad", "Not Too Bad", "Average", "Nice", "Amazing"]}
    />
    <StarRating maxRating={10} size={24} color="cyan" />
    <StarRating defaultRating={3} />
    {/* <App /> */}
  </React.StrictMode>
);
