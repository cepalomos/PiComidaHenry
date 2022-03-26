import React from "react";

export default function Dietas({ diets }) {
  let options = diets.map(dato=> <option key={dato.id} value={dato.name} />)
  return (
    <div>
      <label>
        Escriba en la caja de texto la dieta:
        <input list="dietas" name="myBrowser" />
      </label>
      <datalist id="dietas">
        {options.length >=1 && options}
      </datalist>
    </div>
  );
}
