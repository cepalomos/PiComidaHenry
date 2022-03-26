import React from "react";

export default function OrderAlfabeticamente() {
  return (
    <div>
      <label>
        Filtar por order alfabetico
        <select id="orderAlf" name="orderAlf">
          <option value="asc">Asendente</option>
          <option valul="des">Desendente</option>
        </select>
      </label>
      <button>Filtar</button>
    </div>
  );
}
