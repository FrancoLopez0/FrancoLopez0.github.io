import { createContext, useState, useEffect } from "react";
import { tareas as datos } from "../tareas";

export const TareaContexto = createContext();

export function TareaContextoProevedor(props) {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(datos);
  }, []);

  function crearTarea(tituloTarea, descripcionTarea) {
    setTareas([
      ...tareas,
      {
        titulo: tituloTarea,
        id: tareas.length,
        descripcion: descripcionTarea,
      },
    ]); //Añado un valor al array
  }

  function borrarTarea(idTarea) {
    console.log(idTarea);
    setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
  }

  return (
    <TareaContexto.Provider
      value={{
        tareas: tareas,
        borrarTarea: borrarTarea,
        crearTarea: crearTarea,
      }}
    >
      {props.children}
    </TareaContexto.Provider>
  );
}
