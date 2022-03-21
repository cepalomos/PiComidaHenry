"use strict";
const { Router } = require("express");
const router = Router();
const { Diet } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const dietas = await Diet.findAll();
    res.send(dietas);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
