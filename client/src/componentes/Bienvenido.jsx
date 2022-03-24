import React from "react";
import { Link } from "react-dom";
import "../hojasEstilos/Bienvenido.css";

export default function Bienvenida() {
  return (
    <>
      <div className="titulo">
        <h1>Bienvenido a la app de comida</h1>
      </div>
      <div className="botonIgreso">
        <Link><p>Ingresa</p></Link>
      </div>
    </>
  );
}
