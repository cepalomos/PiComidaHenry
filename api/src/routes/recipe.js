require('dotenv').config();
const { Router } = require('express');
//const { Recipe, Diet } = require("../db.js");
const router = Router();
const {API_KEY} = process.env;
const {URL_PRINCIPAL} = require('../utils/constantes.js');
const formateo = require('../utils/formateo.js');

router.route("/").get(async(req,res)=>{
    const datos = await formateo(URL_PRINCIPAL.replace("{API_KEY}", API_KEY))
    res.send(datos);

    // .then(
    //     datos => res.send(datos)
    // ).catch(error=>res.status(400).send(JSON.stringify(new Error(error))));
})


module.exports = router;
