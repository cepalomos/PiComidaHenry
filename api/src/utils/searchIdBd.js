"use strict";
const { Recipe, Diet } = require("../db.js");

module.exports = async (id) => {
  try {
    const receta = await Recipe.findByPk(id, {
      include: { model: Diet, attributes: ["name"] },
    });
    return receta;
  } catch (error) {
    new Error(error);
  }
};
