import { TareaContextoProevedor } from "../context/TareaContexto";
import { useContext } from "react";
import { TareaContexto } from "../context/TareaContexto";

export function CartaTarea({ tarea }) {
  const { borrarTarea } = useContext(TareaContexto);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => borrarTarea(tarea.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
