import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import peticionRecetas from "../redux/actions/actions.js";
import { URL_RECETAS } from "../utils/constantes.js";
import Tarjeta from "./Tarjeta.jsx";

export default function Tarjetas() {
  const dispatch = useDispatch();
  const recetasUrl = useSelector((state) => state.recetasUrl);

  useEffect(() => {
    dispatch(peticionRecetas(URL_RECETAS));
  }, []);

  return (
    <div className="tarjetas">
      {recetasUrl.loading && <div>Loading...</div>}
      {recetasUrl.recetas.length >= 1 && (
        <ul>
          {recetasUrl.recetas.map((receta) => (
            <li>
              <Tarjeta
                key={receta.id}
                name={receta.name}
                imagen={receta.image}
                dietas={receta.diets}
              />
            </li>
          ))}
        </ul>
      )}
      {recetasUrl.error !== "" && (
        <img
          src={
            "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2020/08/17/5f3a64f8f0823.r_d.987-436-7560.jpeg"
          }
        />
      )}
    </div>
  );
}
