"use strict";
require("dotenv").config();
const { Router } = require("express");
const { Recipe, Diet } = require("../db.js");
const router = Router();
const { API_KEY } = process.env;
const { URL_PRINCIPAL, URL_DETALLE } = require("../utils/constantes.js");
const formateo = require("../utils/formateo.js");
const { Op } = require("sequelize");
const searchId = require("../utils/searchId.js");
const searchBd = require('../utils/searchIdBd.js');

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id.length < 7) {
    searchId(URL_DETALLE.replace("{API_KEY}", API_KEY).replace("{id}", id))
      .then((receta) => res.send(receta))
      .catch((error) =>
        res.status(500).send("No existe la receta en nuestra base de datos")
      );
  }else{
    searchBd(id).then(receta=>res.send(receta)).catch(error=>res.status(500).send(new Error(error)));
  }
});

router
  .route("/")
  .get((req, res) => {
    const { name } = req.query;
    if (name) {
      formateo(URL_PRINCIPAL.replace("{API_KEY}", API_KEY))
        .then((recetas) => {
          return recetas.filter((receta) =>
            receta.name.toLowerCase().includes(name.toLowerCase())
          );
        })
        .then((data) =>
          Recipe.findAll({
            where: {
              name: {
                [Op.like]: name,
              },
            },
            include: {
              model: Diet,
              attributes: ["name"],
            },
          }).then((dabaBd) => dabaBd.concat(data))
        )
        .then((result) => res.send(result));
    } else {
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

        .catch((error) =>
          res.status(400).send(JSON.stringify(new Error(error)))
        );
    }
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
