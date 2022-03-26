import React from "react";

export default function Busqueda() {
  return (
    <div>
      <label>
        Busqueda por nombre
        <input id="buscar" name="buscar" type="text" />
      </label>
      <button id="buscarName">Buscar</button>
    </div>
  );
}
