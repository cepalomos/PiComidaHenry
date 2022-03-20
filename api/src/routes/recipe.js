require("dotenv").config();
const { Router } = require("express");
const { Recipe, Diet } = require("../db.js");
const router = Router();
const { API_KEY } = process.env;
const { URL_PRINCIPAL } = require("../utils/constantes.js");
const formateo = require("../utils/formateo.js");

router.route("/").get((req, res) => {
  datosCombinados = [];
  formateo(URL_PRINCIPAL.replace("{API_KEY}", API_KEY))
    .then((datos) => (datosCombinados = [...datosCombinados, ...datos]))
    .then(() => {
      Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
        },
      }).then(
        (recetas) => datosCombinados= [...datosCombinados,...recetas]
      );
    })
    .then(res.send(datosCombinados))

    .catch((error) => res.status(400).send(JSON.stringify(new Error(error))));
}).post((req,res)=>{
    const {name, summary, score, healthScore, steps, diets} = req.body;
    res.send("ok")
});

module.exports = router;
