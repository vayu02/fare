import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const selectRoot = document.getElementById("root");

if (selectRoot === null) {
  throw new Error("Cannot render the application");
}

ReactDOM.createRoot(selectRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
