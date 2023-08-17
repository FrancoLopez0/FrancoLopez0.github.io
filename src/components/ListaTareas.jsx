import { useState, useEffect, useContext } from "react";
import { CartaTarea } from "./CartaTarea";
import { TareaContexto } from "../context/TareaContexto";

export default function ListaTareas() {
  
  const {tareas} = useContext(TareaContexto)
  
  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div >
      <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <CartaTarea key={tarea.id} tarea={tarea} />
      ))}
      </div>
      
    </div>
  );
}
