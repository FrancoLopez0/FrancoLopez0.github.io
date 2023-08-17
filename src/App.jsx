import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListaTareas from "./components/ListaTareas";
import FormTareas from "./components/FormTareas";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container">
        <h1 onClick={(e) => console.log("hola mundo")}>Hola Mundo</h1>
        <FormTareas />
        <ListaTareas />
      </div>
    </main>
  );
}

export default App;
