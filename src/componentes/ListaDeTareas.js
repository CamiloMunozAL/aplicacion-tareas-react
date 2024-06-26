import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css";
import BotonFiltro from "./BotonFiltro";

function ListaDeTareas() {
  // Se inicializa el estado de tareas como un arreglo vacío
  const [tareas, setTareas] = useState([]);

  // Se inicializa el estado de filtro como "todas"
  const [filtro, setFiltro] = useState("todas");

  // Para agregar una tarea, se verifica que el texto de la tarea no esté vacío, se elimina los espacios en blanco al inicio y al final del texto, se agrega la tarea al arreglo de tareas
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Para eliminar una tarea, se filtran las tareas que no coincidan con el id de la tarea a eliminar
  const eliminarTarea = (id) => {
    // si cumple que la tarea.id es diferente al id que se quiere eliminar, se mantiene en el arreglo
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Para completar una tarea, se mapean las tareas y se cambia el valor de la propiedad completada, se genera un nuevo arreglo con las tareas actualizadas
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // Se filtran las tareas según el filtro seleccionado esta funcion se llama cada vez que se cambia el filtro
  // esta funcion retorna un arreglo con las tareas que cumplen con el filtro seleccionado
  // la funcion interna callback recibe una tarea y retorna true si la tarea cumple con el filtro seleccionado esto determina si la tarea se mantiene en el arreglo o no
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") {
      return tarea.completada;
    } else if (filtro === "pendientes") {
      return !tarea.completada;
    } else {
      return true;
    }
  });

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="filtros">
        <BotonFiltro
          filtro="todas"
          setFiltro={setFiltro}
          nombre="Todas"
          filtroActivo={filtro}
        />
        <BotonFiltro
          filtro="completadas"
          setFiltro={setFiltro}
          nombre="Completadas"
          filtroActivo={filtro}
        />
        <BotonFiltro
          filtro="pendientes"
          setFiltro={setFiltro}
          nombre="Pendientes"
          filtroActivo={filtro}
        />
      </div>
      <div className="tareas-lista-contenedor">
        {tareasFiltradas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
