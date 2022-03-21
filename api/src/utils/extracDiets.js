const { default: axios } = require("axios");
const { Diet } = require("../db.js");

module.exports = async (url_api) => {
  try {
    const respont = await axios.get(url_api);
    const dietas = respont.data.results
      .map((datos) => {
        return datos.diets;
      })
      .flat()
      .map((dieta) => {
        return { name: dieta };
      });
    let aux = {};
    const Diets = dietas.filter((dieta) =>
      aux[dieta.name] ? false : (aux[dieta.name] = true)
    );
    await Diet.bulkCreate(Diets);
  } catch (error) {
    return new Error(error);
  }
};
