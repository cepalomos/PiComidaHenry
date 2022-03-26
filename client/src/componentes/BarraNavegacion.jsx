import React, { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import OrderAlfabeticamente from "./OrderAlfabeticamente";
import Dietas from "./Dietas";
import Puntuacion from "./Puntuacion";
import { URL_TYPE } from "../utils/constantes";
import { useAxios } from "../hooks/useAxios";

export default function BarraNavegacion() {
  const dietas = useAxios(URL_TYPE);
  return (
    <div>
      {dietas.data.length >=1 && <Dietas diets={[dietas.data]}/>}
    </div>
  );
}
