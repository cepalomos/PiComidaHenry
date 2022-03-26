import React from "react";

export default function Puntuacion() {
  return (
    <>
      <div>
        <label >Filtrar por Puntuacion escriba el rango a filtrar entre 0 y 100
        <input id="score" name="score" type='text' />
        <span></span>
        <input id="scoreTop" name="scoreTop" type='text'/>
        <span></span></label>
        <button id="scoreButtom" >Filtra Puntacion</button>
      </div>
    </>
  );
}
