const { default: axios } = require("axios");

module.exports = (url_api) => {
  axios
    .get(url_api)
    .then((res) => {
      const recetas = res.data.results.map((receta) => {
        return {
          id: receta.id,
          name: receta.title,
          summary: receta.summary,
          score: receta.spoonacularScore,
          healthScore: receta.healthScore,
          steps:
            receta?.analyzedInstructions[0].steps.map(
              (paso) => `${paso.number}. ${paso.step}`
            ) ?? "no hay informacion",
          diets: receta.diets,
        };
      });
      console.table(recetas);
      return recetas;
    })
    .catch((error) => new Error(error));
};
