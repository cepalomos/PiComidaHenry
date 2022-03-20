require("dotenv").config();
const {Router} = require('express');
const router = Router();
const {URL_PRINCIPAL}= require('../utils/constantes.js');
const dieta = require('../utils/extracDiets.js');
const {API_KEY} = process.env;

router.get("/",(req,res)=>{
    dieta(URL_PRINCIPAL.replace("{API_KEY}", API_KEY)).then(()=>console.log("exito")).catch(error=>console.error(error));
})



module.exports = router;