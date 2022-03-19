require('dotenv').config();
const { Router } = require('express');
//const { Recipe, Diet } = require("../db.js");
const router = Router();
const {API_KEY} = process.env;
const {URL_PRINCIPAL} = require('../utils/constantes.js');
const formateo = require('../utils/formateo.js');

router.route("/").get((req,res)=>{
    console.log("me hici solitud");
    formateo(URL_PRINCIPAL.replace("{API_KEY}", API_KEY))
    .then(datos=>res.send(datos));

    // .then(
    //     datos => res.send(datos)
    // ).catch(error=>res.status(400).send(JSON.stringify(new Error(error))));
})


module.exports = router;
