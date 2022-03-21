'use strict'
const { Router } = require('express');
const recipe = require('./recipe.js');
const home = require("./home.js");
const type = require('./type.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipe",recipe);
router.use("/type",type);
router.use("/",home);


module.exports = router;
