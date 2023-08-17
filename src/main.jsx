import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TareaContextoProevedor } from "./context/TareaContexto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TareaContextoProevedor>
      <App />
    </TareaContextoProevedor>
  </React.StrictMode>
);
