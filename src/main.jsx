// **** Installed libraries **** //
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// **** JSX **** //
import App from "./App.jsx";
// **** CSS **** //
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App  />
  </BrowserRouter>
);
