import { useState, useContext } from "react";
import { TareaContexto } from "../context/TareaContexto";


export function FormTareas() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const {crearTarea} = useContext(TareaContexto)

  const manejarEntrega = (e) => {
    e.preventDefault();
    console.log(titulo);

    crearTarea(titulo, descripcion); //Importada desde App.jsx
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejarEntrega} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>

        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500  px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default FormTareas;
