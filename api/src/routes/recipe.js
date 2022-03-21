"use strict";
require("dotenv").config();
const { Router } = require("express");
const { Recipe, Diet } = require("../db.js");
const router = Router();
const { API_KEY } = process.env;
const { URL_PRINCIPAL } = require("../utils/constantes.js");
const formateo = require("../utils/formateo.js");

router
  .route("/")
  .get((req, res) => {
    formateo(URL_PRINCIPAL.replace("{API_KEY}", API_KEY))
      .then(async (datosurl) => {
        let recetas = await Recipe.findAll({
          include: {
            model: Diet,
            attributes: ["name"],
          },
        });
        return datosurl.concat(recetas);
      })
      .then((datos) => res.send(datos))

      .catch((error) => res.status(400).send(JSON.stringify(new Error(error))));
  })
  .post((req, res) => {
    const { name, summary, score, healthScore, steps, diets } = req.body;
    Recipe.create({
      name,
      summary,
      score,
      healthScore,
      steps,
    })
      .then(async (receta) => {
        await receta.addDiet(diets);
        return receta.id;
      })
      .then((id) =>
        Recipe.findByPk(id, {
          include: { model: Diet, attributes: ["name"] },
        })
      )
      .then((receta) => res.send(receta))
      .catch((error) => {
        res.status(500).send(new Error(error));
        console.error(error);
      });
  });

module.exports = router;
