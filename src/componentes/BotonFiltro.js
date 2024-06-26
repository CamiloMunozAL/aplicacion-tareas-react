import React from "react";
import "../hojas-de-estilo/BotonFiltro.css";

// Crear un componente BotonFiltro que reciba las propiedades filtro, setFiltro, nombre y filtroActivo
// El componente debe ser un botón que al hacer click cambie el filtro activo
// Si el filtro es igual al filtro activo, el botón debe tener la clase "activo"
// El componente debe retornar un botón con el nombre del filtro y la clase "activo" si el filtro es igual al filtro activo

// filtro es el filtro que se quiere aplicar
// setFiltro es la función que se encarga de cambiar el filtro activo
// nombre es el nombre del filtro
// filtroActivo es el filtro que está activo actualmente
function BotonFiltro({ filtro, setFiltro, nombre, filtroActivo }) {
  return (
    <button
      onClick={() => setFiltro(filtro)}
      className={filtroActivo === filtro ? "activo" : ""}
    >
      {nombre}
    </button>
  );
}

export default BotonFiltro;
