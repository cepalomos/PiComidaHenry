import React, { useEffect } from "react";
import tarjetas from "./Tarjeta.jsx";
import { useDispatch, useSelector } from "react-redux";
import peticionRecetas from "../redux/actions/actions.js";
import { URL_RECETAS } from "../utils/constantes.js";
import Tarjeta from "./Tarjeta.jsx";

export default function tarjetas() {
  const dispatch = useDispatch();
  const recetasUrl = useSelector((state) => state.recetasUrl);

  useEffect(() => {
    dispatch(peticionRecetas(URL_RECETAS));
  }, []);

  return (
    <div className="tarjetas">
      {recetasUrl.loading && <div>Loading...</div>}
      {recetasUrl.recetas.length >= 1 &&
        recetasUrl.recetas.forEach((receta) => (
          <Tarjeta
            name={receta.name}
            imagen={receta.imagen}
            dietas={receta.diets}
          />
        ))}
    </div>
  );
}
