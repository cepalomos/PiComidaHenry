'use strict'

const { default: axios } = require("axios")


module.exports = (url_id)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url_id).then(({data})=>{
            const {id, title, image, summary, diets, instructions, healthScore, spoonacularScore} = data;
            const receta = {
                id,
                name:title,
                image,
                summary,
                score:spoonacularScore,
                healthScore,
                instructions,
                diets
            };
            resolve(receta)
        }).catch(error=>new Error(error));
    });
}